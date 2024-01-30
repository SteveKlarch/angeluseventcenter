<section class="home">

    <video class="home__video" autobuffer autoplay muted loop>
        <source src="<?= get_stylesheet_directory_uri(); ?>/assets/videos/angelus-home.mp4" type="video/mp4">
    </video>
    <div class="home__curtain"></div>
    <div class="home__principal">
        <picture class="home__principal-logo-angelus">
            <source srcset="<?= get_stylesheet_directory_uri(); ?>/assets/images/home/desktop.png" media="(min-width: 1366px)"></source>
            <source srcset="<?= get_stylesheet_directory_uri(); ?>/assets/images/home/laptop-big.png" media="(min-width: 1024px)"></source>
            <source srcset="<?= get_stylesheet_directory_uri(); ?>/assets/images/home/laptop.png" media="(min-width: 810px)"></source>
            <source srcset="<?= get_stylesheet_directory_uri(); ?>/assets/images/home/mobile-big.png" media="(min-width: 428px)"></source>
            <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/home/mobile.png" alt="Logo de Angelus Centro D' Eventos.">
        </picture>
        <h1 class="home__principal-subtitle">Donde los sueños de amor se hacen realidad.</h1>
        <div class="home__principal-menu">
            <a class="home__principal-menu-button" href="<?= home_url(); ?>">Boutique</a>
            <a class="home__principal-menu-button" href="<?= home_url(); ?>">Ver revista</a>
            <a class="home__principal-menu-button" href="<?= home_url(); ?>">Reservar cita</a>
        </div>
    </div>

</section>