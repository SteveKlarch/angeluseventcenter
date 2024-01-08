<?php

// Personalización del tema

add_action('wp_enqueue_scripts', function() {

    // Fuentes de letra

    wp_register_style('Libre', 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap', array(), false, 'all');
    wp_register_style('Work', 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap', array(), false, 'all');
    wp_register_style('Inter', 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap', array(), false, 'all');

    // Bootstrap

    wp_register_style('Bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css', array(), '5.3.2', 'all');

    // Styles

    wp_enqueue_style('style', get_stylesheet_uri(), array('Libre', 'Work', 'Inter'), false, 'all');

    // Scripts

    // Bootstrap

    wp_register_script('Bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', array(), '5.3.2', true);

    // Propios
    // wp_enqueue_script();

});

add_action('wp_enqueue_scripts', function() {

    // wp_localize_script();

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

}); 

add_action('init', function() {

});

add_action('rest_api_init', function() {

});

add_action('wp_footer', function() {
    ?> 

        <script src="https://kit.fontawesome.com/ac68f277db.js" crossorigin="anonymous"></script>

    <?php
});

// Funciones de la REST API de Angelus Centro D' Eventos

