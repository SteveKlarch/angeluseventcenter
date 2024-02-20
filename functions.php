<?php

require_once(get_template_directory() . '/woocommerce-functions.php');

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
    wp_enqueue_script('drivers', get_stylesheet_directory_uri() . '/assets/scripts/drivers.js', array('functions'), false, true);
    wp_enqueue_script('interfaces', get_stylesheet_directory_uri() . '/assets/scripts/interface.js', array('functions'), false, true);
    wp_enqueue_script('logout', get_stylesheet_directory_uri() . '/assets/scripts/logout.js', array('functions'), false, true);
    wp_enqueue_script('create', get_stylesheet_directory_uri() . '/assets/scripts/create.js', array('functions'), false, true);
    wp_enqueue_script('new-member', get_stylesheet_directory_uri() . '/assets/scripts/new-member.js', array('functions'), false);
    wp_enqueue_script('success', get_stylesheet_directory_uri() . '/assets/scripts/success.js', array('functions'), false);

});

add_action('wp_enqueue_scripts', function() {

    // Localizador del archivo functions.js

    wp_localize_script('drivers', 'driver', array(
        'ck'    => 'ck_76d6c6a9d61995cf703df52f428b20e7c9b7150c',
        'cs'    => 'cs_b06937596a9ff7b6bed8e307a7b3108fe31b15aa'
    ));

    wp_localize_script('interfaces', 'interface', array(
        'ck'    => 'ck_76d6c6a9d61995cf703df52f428b20e7c9b7150c',
        'cs'    => 'cs_b06937596a9ff7b6bed8e307a7b3108fe31b15aa'
    ));

    wp_localize_script('functions', 'object', array(
        'url_home'          => home_url(),
        'url_api'           => home_url('wp-json'),
        'url_team'          => home_url('team'),
        'url_create'        => home_url('panel/create'),
        'url_logout'        => home_url('logout'),
        'ck'    => 'ck_76d6c6a9d61995cf703df52f428b20e7c9b7150c',
        'cs'    => 'cs_b06937596a9ff7b6bed8e307a7b3108fe31b15aa'
    ));

    wp_localize_script('route', 'universal', array(
        'burguer_icon'   => get_stylesheet_directory_uri() . '/assets/icons/panel/burguer-member.svg',
        'add_icon'       => get_stylesheet_directory_uri() . '/assets/icons/panel/add.svg',
        'store_icon'     => get_stylesheet_directory_uri() . '/assets/icons/panel/store.svg'
    ));

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

    wp_localize_script('create', 'item', array(
        'url'           => home_url('create'),
        'url_panel'     => home_url('panel')
    ));

    wp_localize_script('new-member', 'member', array(
        'url_panel'     => home_url('panel'),
        'url_api'       => home_url('wp-json')
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
            'role'          => 'anunciante',
            'display'       => 'Anunciante de la Boutique',
            'capabilities'  => array(
                'delete_posts'           => true,
                'delete_private_posts'   => true,
                'delete_published_posts' => true,
                'edit_posts'             => true,
                'edit_other_posts'       => true,
                'manage_categories'      => true,
                'publish_posts'          => true,
            )
        ],
        [
            'role'          => 'admin',
            'display'       => 'Administrador de la Boutique',
            'capabilities'  => array_merge(get_role('administrator')->capabilities, get_role('shop_manager')->capabilities)
        ]
    );

    aec_roles($roles);

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

    register_rest_route('angelus', 'members/new-member', array(
        'methods'   => 'POST',
        'callback'  => 'new_member'
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

    $firstName = explode(' ', wp_unslash($request['member']['name']), true)[0];
    $lastName = explode(' ', wp_unslash($request['member']['name']), true)[1];
    $email = stripslashes(sanitize_user(wp_unslash($request['member']['email']), true));
    $username  = strtolower(implode('-', explode(' ', stripslashes(sanitize_user(wp_unslash($request['member']['name']), true)))));
    $password = stripslashes(wp_unslash($request['member']['password']));
    $role     = $request['member']['role'];  

    if(empty($email) && empty($username)) {
        wp_send_json(array(
            'status'    => 1000,
            'message'   => 'Por favor, llena todos los campos requeridos.'
        ));
    } else if(empty($email)) {
        wp_send_json(array(
            'status'    => 1100,
            'message'   => 'Por favor, coloca un email para continuar.'
        ));
    } else if(empty($username)) {
        wp_send_json(array(
            'status'    => 1200,
            'message'   => 'Por favor llena el campo de "Nombre de usuario".'
        ));
    } else if(empty($password)) {
        wp_send_json(array(
            'status'    => 1300,
            'message'   => 'Por favor, llena el campo de "contraseña".'
        ));
    } else if(empty($role)) {
        wp_send_json(array(
            'status'    => 1340,
            'message'   => 'Por favor, elije un rol de usuario.'
        ));
    }

    $_email_exist = get_user_by('email', $email);
    $_user_exist  = get_user_by('login', $username);

    if($_email_exist) {
        wp_send_json(array(
            'status'    => 1400,
            'message'   => 'Ya existe este email, prueba con otro.'
        ));
    }

    if($_email_exist) {
        wp_send_json(array(
            'status'    => 1500,
            'message'   => 'Ya existe este usuario.'
        ));
    }

    $newUser = array(
        'user_login'            => $email,
        'first_name'            => $firstName,
        'last_name'             => $lastName,
        'nickname'              => $username,
        'user_pass'             => $password,
        'user_email'            => $email,
        'rich_editing'          => false,
        'user_ssl'              => true,
        'show_admin_bar_front'  => false,
        'syntax_highlighting'   => false,
        'role'                  => $role
    );

    if($role == 'gestor') {
        $newUser['role'] = 'gestor';
    } else if($role == 'ejecutivo') {
        $newUser['role'] = 'ejecutivo';
    } else if($role == 'planificador') {
        $newUser['role'] = 'planificador';
    } else if($role == 'anunciante') {
        $newUser['role'] = 'anunciante';
    } else {
        $newUser['role'] = 'admin';
    }

    $newUserID = wp_insert_user($newUser);

    if($newUserID) {
        // Parámetros para conceder permisos al nuevo miembro 
        $store_url  = home_url();
        $endpoint   = '/wc-auth/v1/authorize';
        $params     = array(
            'app_name'      => 'angelus_' . $email,
            'scope'         => 'read_write',
            'user_id'       => $newUserID,
            'return_url'    => home_url('/panel/create/new-member'),
            'callback_url'  => home_url('/panel/lost?err=failed-member')
        );
        $query_string       = http_build_query($params);
        $url_credentials    = $store_url . $endpoint . '?' . $query_string;

        wp_send_json(array(
            'status'    => 400,
            'message'   => $url_credentials
        ));
    }

}

function assignCredentials($role) {

    $newUser['meta_input'] = array(

        

    );

}

// Funcionalidades
function aec_roles($roles) {
    foreach($roles as $role) {

        add_role($role['role'], $role['display'], $role['capabilities']);

    }
}