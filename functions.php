<?php

// Personalización del tema

add_action('wp_enqueue_scripts', function() {

    // Fuentes de letra

    wp_register_style('Libre', 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap', array(), false, 'all');
    wp_register_style('Work', 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap', array(), false, 'all');
    wp_register_style('Inter', 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap', array(), false, 'all');
    wp_register_style('Montserrat', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap', array(), false, 'all');

    // Bootstrap

    wp_register_style('Bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css', array(), '5.3.2', 'all');

    // Styles

    wp_enqueue_style('style', get_stylesheet_uri(), array('Libre', 'Work', 'Inter', 'Montserrat'), false, 'all');
    wp_enqueue_style('panel', get_stylesheet_directory_uri() . '/assets/styles/panel/styles.css', array('Libre', 'Work', 'Inter'), false, 'all');

    // Scripts

    // Bootstrap

    wp_register_script('Bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', array(), '5.3.2', true);

    // Propios
    wp_register_script('functions', get_stylesheet_directory_uri() . '/assets/scripts/functions.js', array(), false, true);
    wp_enqueue_script('signon', get_stylesheet_directory_uri() . '/assets/scripts/signon.js', array('functions'), false, true);
    wp_enqueue_script('route', get_stylesheet_directory_uri() . '/assets/scripts/route.js', array('functions'), false, true);
    wp_enqueue_script('interfaces', get_stylesheet_directory_uri() . '/assets/scripts/interfaces.js', array('functions'), false, true);
    wp_enqueue_script('logout', get_stylesheet_directory_uri() . '/assets/scripts/logout.js', array('functions'), false, true);

});

add_action('wp_enqueue_scripts', function() {

    // Localizador del archivo functions.js

    wp_localize_script('functions', 'object', array(
        'url_home'      => home_url(),
        'url_api'       => home_url('wp-json'),
        'url_team'    => home_url('team')    
    ));

    // Localizador de funciones registradas

    wp_localize_script('route', 'universal', array(
        'burguer_icon'   => get_stylesheet_directory_uri() . '/assets/icons/panel/burguer-member.svg',
        'add_icon'       => get_stylesheet_directory_uri() . '/assets/icons/panel/add.svg',
        'store_icon'     => get_stylesheet_directory_uri() . '/assets/icons/panel/store.svg'
    ));

    // Localizador de funciones en fila

    wp_localize_script('signon', 'login', array(
        'url_home'  => home_url(),
        'url_api'   => home_url('wp-json')
    ));

    wp_localize_script('logout', 'lgout', array(
        'url_logout'  => home_url('logout'),
        'url_api'   => home_url('wp-json'),
        'url_panel' => home_url('panel'),
        'url_team'  => home_url('team')
    ));

});

add_action('after_setup_theme', function() {

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'width'         => 50,
        'height'        => 50,
        'flex-width'    => true,
        'flex-height'   => true   
    ));

});

add_action('init', function() {

    $roles = array(
        [
            'role'          => 'gestor',
            'display'       => 'Gestor de la tienda',
            'capabilities'  => array(
                'delete_posts'           => true,
                'delete_private_posts'   => true,
                'delete_published_posts' => true,
                'edit_posts'             => true,
                'edit_other_posts'       => true,
                'manage_categories'      => true,
                'publish_posts'          => true
            )
        ],
        [
            'role'          => 'ejecutivo',
            'display'       => 'Ejecutivo de venta',
            'capabilities'  => array(
                'delete_posts'           => true,
                'delete_private_posts'   => true,
                'delete_published_posts' => true,
                'edit_posts'             => true,
                'edit_other_posts'       => true,
                'manage_categories'      => true,
                'publish_posts'          => true,
                'edit_pages'             => true,
                'publish_pages'          => true
            )
        ],
        [
            'role'          => 'planificador',
            'display'       => 'Planificador de los eventos',
            'capabilities'  => array(
                'delete_posts'           => true,
                'delete_private_posts'   => true,
                'delete_published_posts' => true,
                'edit_posts'             => true,
                'edit_other_posts'       => true,
                'manage_categories'      => true,
                'publish_posts'          => true,
                'edit_pages'             => true,
                'publish_pages'          => true
            )
        ],
        [
            'role'          => 'ejecutivo',
            'display'       => 'Ejecutivo de venta',
            'capabilities'  => array(
                'delete_posts'           => true,
                'delete_private_posts'   => true,
                'delete_published_posts' => true,
                'edit_posts'             => true,
                'edit_other_posts'       => true,
                'manage_categories'      => true,
                'publish_posts'          => true,
                'edit_pages'             => true,
                'publish_pages'          => true
            )
        ]
    );

    aec_add_role($roles);

}); 

add_action('rest_api_init', function() {

    register_rest_route('angelus', 'members/signon', array(
        'methods'   => 'POST',
        'callback'  => 'angelus_signon'
    ), true);

    register_rest_route('angelus', 'members/logout', array(
        'methods'   => 'GET',
        'callback'  => 'log_out'
    ), true);

    register_rest_route('angelus', 'members/authenticate', array(
        'methods'   => 'GET',
        'callback'  => 'authenticate_member'
    ), true);

});

add_action('wp_footer', function() {
    ?> 

        <script src="https://kit.fontawesome.com/ac68f277db.js" crossorigin="anonymous"></script>

    <?php
});

// Funciones de la REST API de Angelus Centro D' Eventos

function angelus_signon($request) {

    session_start();

    $email    = stripslashes($request['login']['email']);
    $password = stripslashes(wp_unslash($request['login']['password']));
    $remember = false;

    if(!is_ssl()) {
        return false;
    }

    if(empty($email) && empty($password)) {
        return 'Por favor, llena los campos.';
    }

    if(empty($email)) {
        return 'Por favor, introduce tu dirección de email.';
    }

    $email = sanitize_user(wp_unslash($request['login']['email']), true);

    if(empty($password)) {
        return 'Por favor, introduce tu contraseña.';
    }

    $password = wp_unslash($request['login']['password']);

    if(isset($request['login']['remember'])) {
        $remember = true;
    }

    $credentials = array(
        'user_login'    => $email,
        'user_password' => $password,
        'remember'      => $remember
    );

    $userLogin     = wp_signon($credentials, true);
    $error_message = $userLogin->get_error_message();

    if(!$error_message) {
        $id                  = $userLogin->data->ID;
        $_SESSION['user_id'] = $id;
    }

    wp_send_json($error_message);

}

// Funciones generales

function authenticate($userID) {

    return get_user_by('ID', $userID);

}

function log_out() {

    session_start();
    wp_logout();
    session_destroy();

    return true;

}

function authenticate_member() {

    session_start();

    if(!isset($_SESSION['user_id'])) {
        return false;
    }

    $authenticate = authenticate($_SESSION['user_id']);

    if(!$authenticate) {
        return false;
    }

    return true;

}

function new_member($request) {

    $email = stripslashes(sanitize_user(wp_unslash($request['member']['email']), true));
    $user  = stripslashes(sanitize_user(wp_unslash($request['member']['name']), true));
    $password = stripslashes(wp_unslash($request['member']['password']));
    $role     = $request['member']['role'];

    $_email_exist = get_user_by('email', $email);
    $_user_exist  = get_user_by('login', $user);

    if($_email_exist) {
        wp_send_json(array(
            'status'    => 1000,
            'message'   => 'Ya existe este email, prueba con otro.'
        ));
    }

    if($_email_exist) {
        wp_send_json(array(
            'status'    => 1100,
            'message'   => 'Ya existe este usuario.'
        ));
    }

    $newUser = array(
        'user_login'            => $user,
        'user_pass'             => $password,
        'user_email'            => $email,
        'rich_editing'          => false,
        'user_ssl'              => true,
        'show_admin_bar_front'  => false
    );

    if($role == 'gestor') {
        // $newUser['role'] = ;
    } else if($role == 'ejecutivo') {
        // $newUser['role'] = ;
    } else if($role == 'planificador') {
        // $newUser['role'] = ;
    } else {
        // $newUser['role'] = ;
    }

    $newUser = wp_insert_user($newUser);

    if($newUser) {
        wp_send_json(array(
            'status'    => 400,
            'message'   => 'Se ha creado un nuevo miembro.'
        ));
    }

}

function assignCredentials($role) {

    $newUser['meta_input'] = array(

        

    );

}

// Funcionalidades

function aec_add_role($roles) {

    foreach($roles as $role) {

        add_role($role['role'], $role['display'], $role['capabilities']);

    }

}

