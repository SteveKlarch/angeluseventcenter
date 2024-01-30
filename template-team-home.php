<?php // Template Name: Team home ?>
<?php session_start(); ?>
<?php if(isset($_SESSION['user_id'])) {
    header('Location:' . home_url('panel'));
    exit();
} ?>
<?= get_header(); ?>
    <section id="team-home" class="team-home">

        <section class="team-home__galery">

            <picture class="team-home__galery-picture team-home__galery-picture--one">
                
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/a.png" alt="Vestido de novia.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/b.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/c.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/d.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/e.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/a.png" alt="Vestido de novia.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/b.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/c.png" alt="Imagen de la galerìa.">

            </picture>
            <picture class="team-home__galery-picture team-home__galery-picture--two">
                
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/m.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/h.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/i.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/j.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/k.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/l.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/m.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/h.png" alt="Imagen de la galerìa.">

            </picture>
            <picture class="team-home__galery-picture team-home__galery-picture--three">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/p.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/q.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/r.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/s.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/n.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/p.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/q.png" alt="Imagen de la galerìa.">
            </picture>
            <picture class="team-home__galery-picture team-home__galery-picture--four">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/y.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/t.png" alt="Imagen de la galerìa.">    
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/u.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/v.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/w.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/x.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/y.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/t.png" alt="Imagen de la galerìa.">
            </picture>
            <picture class="team-home__galery-picture team-home__galery-picture--five">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/aa.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/ab.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/ac.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/ad.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/ae.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/z.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/aa.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/ab.png" alt="Imagen de la galerìa.">
            </picture>
            <picture class="team-home__galery-picture team-home__galery-picture--six">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/t.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/z.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/a.png" alt="Vestido de novia.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/h.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/n.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/o.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/t.png" alt="Imagen de la galerìa.">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/galery/z.png" alt="Imagen de la galerìa.">
            </picture>

        </section>
        <section class="team-home__form">

            <form id="form-login" class="team-home__form-perse" action="./" method="post">

                <img class="team-home__form-logo" src="<?= get_stylesheet_directory_uri(); ?>/assets/images/perse-logo.png" alt="Logo de Angelus">

                <label class="team-home__form-perse-label team-home__form-perse--email" for="login_email">
                    <input id="login_email" name="login[email]" type="email" placeholder="Email" autocomplete="email" />
                </label>

                <label class="team-home__form-perse-label team-home__form-perse--password" for="login_password">
                    <input id="login_password" name="login[password]" type="password" placeholder="Contraseña" autocomplete="current_password" />
                </label>

                <input id="remember" class="team-home__form-perse-input" type="checkbox" name="login[remember]" value="false" />
                <label for="remember" class="team-home__form-perse-input-label team-home__form-perse--remember">
                    <span>Recordar usuario y contraseña.</span>
                </label>

                <button id="team-login" class="team-home__form-perse--button" type="submit">Iniciar sesión</button>

                <a class="team-home__form-perse--forget" href="<?= home_url(); ?>">¿Olvidaste tu contraseña?</a>
            </form>

        </section>
        
    </section>

<?= wp_footer(); ?>