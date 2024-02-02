<?php // Template name: Crear ?>
<?php session_start(); ?>
<?php if(empty($_SESSION['user_id'])) {

    if(!get_user_by('ID', $_SESSION['user_id'])) {
        header('Location: ' . home_url('team'));
        exit();
    }

} ?>

<?php get_header(); ?>

    <section id="new" class="new">
        <!-- Aquí van los diferentes tipos de interfaces según lo que el 
        miembro del equipo selecciones en la sección "crear" -->
    </section>

<?php wp_footer(); ?>