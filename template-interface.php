<?php // Template name: Interfaz ?>
<?php session_start(); ?>
<?php if(empty($_SESSION['user_id'])) {

    if(!get_user_by('ID', $_SESSION['user_id'])) {
        header('Location: ' . home_url('team'));
        exit();
    }

} ?>

<?php get_header(); ?>

    <section id="interface" class="interface">
        <!-- Aquí van los diferentes tipos de interfaces según lo que el 
        miembro del equipo selecciones en la sección "crear" -->
    </section>

<?php wp_footer(); ?>