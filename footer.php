<footer class="footer">

    <section class="footer__items">

        <div class="footer__items-magazine">
            <picture class="footer__items-magazine-picture">
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/white-logo.png" alt="angelus-white">
            </picture>
            <span class="footer__items-magazine-span">Los sueños de amor también se hacen realidad en nuestras redes:</span>
            <ul class="footer__items-magazine-social">
                <li class=""><a href=""><i class="fa-brands fa-x-twitter"></i></a></li>
                <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href=""><i class="fa-brands fa-whatsapp"></i></a></li>
            </ul>
        </div>
        <ul class="footer__items-links">
            <li><a href="">Ayuda</a></li>
            <li><a href="">Eventos</a></li>
            <li><a href="">Vestidos</a></li>
            <li><a href="">Accesorios</a></li>
            <li><a href="">Ubicación</a></li>
            <li><a href="">Política de privacidad</a></li>
            <li><a href="">Cookies</a></li>
        </ul>
        <ul class="footer__items-faq">
            <li>
                <a class="footer__items-faq-element" href="<?= home_url(''); ?>"></a>
            </li>
            <li>
                <a class="footer__items-faq-element" href="<?= home_url(''); ?>"></a>
            </li>
            <li>
                <a class="footer__items-faq-element" href="<?= home_url(''); ?>"></a>
            </li>
            <li>
                <a class="footer__items-faq-element" href="<?= home_url(''); ?>"></a>
            </li>
        </ul>

    </section>

    <section class="footer__text">
        <span>
            Angelus Centro D’ Eventos, con amor y glamour para el mundo <i class="fa-solid fa-earth-americas"></i>.
        </span>
    </section>

</footer>
<?php wp_footer(); ?>
</body>
</html>