<?php // Template name: Create New Member ?>

<?php get_header(); ?>

<section>

    <h1>Crear miembro</h1>

    <form action="">

        <h2>Nombre del nuevo miembro</h2>

        <label for="email"><span>Email</span></label>
        <input type="email" placeholder="example@gmail.com">

        <label for="email"><span>Contraseña</span></label>
        <input type="email" placeholder="coloca una contraseña aquí">

        <label for="role"></label>
        <input type="text" placeholder="elige un rol">
        <datalist>
            <option value="gestor"></option>
            <option value="ejecutivo"></option>
            <option value="planificador"></option>
            <option value="anunciante"></option>
        </datalist>

    </form>

</section>

<?php get_footer(); ?>