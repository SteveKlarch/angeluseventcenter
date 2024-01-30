<?php // Template Name: Panel ?>
<?php session_start(); ?>
<?php if(empty($_SESSION['user_id'])) {

    if(!get_user_by('ID', $_SESSION['user_id'])) {
        header('Location: ' . home_url('team'));
        exit();
    }

} ?>
<?php get_header(); ?>

<section class="panel" id="content-panel">
    <section class="panel__grafica">
        <div class="panel__grafica-content panel__grafica-content--graph">
            <h2 class="panel__grafica-content--graph-h2">Estado de la tienda</h2>
            <ul class="panel__grafica-content--graph-time">
                <li class="panel__grafica-content--graph-time-item"><a href="<?= home_url(); ?>">Semanal</a></li>
                <li class="panel__grafica-content--graph-time-item"><a href="<?= home_url(); ?>">Mensual</a></li>
                <li class="panel__grafica-content--graph-time-item"><a href="<?= home_url(); ?>">Anual</a></li>
            </ul>
            <div class="panel__grafica-content--graph-activity">
                <span class="panel__grafica-content--graph-activity-performance">El rendimiento de esta semana fue de:</span>
                <h3  class="panel__grafica-content--graph-activity-amount"><?= '$1,600.00'; ?></h3>
                <span class="panel__grafica-content--graph-activity-time"><?= 'Enero'; ?></span>
            </div>
            <div class="panel__grafica-content--graph-foot">
                <a class="panel__grafica-content--graph-foot-button" href="">Ver toda la actividad del negocio</a>
            </div>
            <canvas>

            </canvas>
        </div>
    </section>
    <section class="panel__historial">

        <div class="panel__historial-header">
            <button class="panel__historial-header-button">Órdenes</button>
            <button class="panel__historial-header-button">Mensajes</button>
            <button class="panel__historial-header-button">Productos</button>
        </div>
        <div class="panel__historial-init">
            <div class="panel__historial-init-button">
                <button class="panel__historial-init-button-add">Añadir +</button>
            </div>
            <div class="panel__historial-init-text">
                <p>Aquí podrás ver las órdenes de tu negocio, los mensajes de los usuarios que visitan 
                el sitio web y los productos publicados.</p>
            </div>
            <div class="panel__historial-init-header">
                <div class="panel__historial-init-header-item"><span>Producto</span></div>
                <div class="panel__historial-init-header-item"><span>Precio</span></div>
                <div class="panel__historial-init-header-item"><span>Historial</span></div>
            </div>
        </div>
        <div class="panel__historial-history">
            <div></div>
            <div></div>
        </div>

    </section>
</section>

<?php wp_footer(); ?>