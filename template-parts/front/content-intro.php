<section class="intro">

    <section class="intro__info">
        <div class="intro__info-page">
            <img class="intro__info-page-vestido" src="<?= get_stylesheet_directory_uri(); ?>/assets/icons/vestido.svg" alt="">
            <h3 class="intro__info-page-encabezado">Excelentísimas damas</h3>
            <h2 class="intro__info-page-frase">Vestidos que celebran la <strong>belleza</strong>, el <strong>amor</strong> y la <strong>feminidad.</strong></h2>
            <article class="intro__info-page-article">
                La <strong>elegancia</strong> y el <strong>glamour</strong> son nuestros valores fundamentales. 
                Por ello, ofrecemos a nuestras novias una selección de vestidos  diseñados para convertir a cada 
                novia en la princesa de su cuento de hadas.
            </article>
        </div>
        <div class="intro__info-confeccionados">
            <span class="intro__info-confeccionados-title">Confeccionados en:</span>
            <div class="intro__info-confeccionados-paises">
                <div class="intro__info-confeccionados-paises-pais intro__info-confeccionados-paises-trqu">
                    <img src="<?= get_stylesheet_directory_uri(); ?>/assets/icons/trqu.svg" alt="">
                    <span>Turquía</span>
                </div>
                <div class="intro__info-confeccionados-paises-pais intro__info-confeccionados-paises-itl">
                    <img src="<?= get_stylesheet_directory_uri(); ?>/assets/icons/itl.svg" alt="">
                    <span>Italia</span>
                </div>
                <div class="intro__info-confeccionados-paises-pais intro__info-confeccionados-paises-spn">
                    <img src="<?= get_stylesheet_directory_uri(); ?>/assets/icons/spn.svg" alt="">
                    <span>España</span>
                </div>
            </div>
        </div>
    </section>

    <section class="intro__fotos">

        <article class="intro__fotos-article intro__fotos-article--fiesta">
            <!-- Imagen de fondo -->
            <picture class="intro__fotos-article-picture intro__fotos-article-picture--fiesta">
                <source srcset="<?= get_stylesheet_directory_uri(); ?>/assets/images/intro/fiesta/desktop.png" media="(min-width: 1723px)" alt="Foto de un vestido de fiesta verde, con brillo de escarcha."></source>
                <source srcset="<?= get_stylesheet_directory_uri(); ?>/assets/images/intro/fiesta/laptop.png" media="(min-width: 1366px)" alt="Foto de un vestido de fiesta verde, con brillo de escarcha."></source>
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/intro/fiesta/mobile.png" alt="Foto de un vestido de fiesta verde, con brillo de escarcha." />
            </picture>
            <!-- Contenedor de información -->
            <div class="intro__fotos-article-info intro__fotos-article-info--fiesta">
                <span>Vestido de fiesta</span>
                <a href="">Ver ahora</a>
            </div>
            <!-- Cortina en degradado para resaltar las palabras -->
            <div class="intro__fotos-article-curtain intro__fotos-article-curtain--fiesta"></div>
        </article>

        <article class="intro__fotos-article intro__fotos-article--novia">
            <picture class="intro__fotos-article-picture intro__fotos-article-picture--novia">
                <source srcset="<?= get_stylesheet_directory_uri(); ?>/assets/images/intro/novia/desktop.png" media="(min-width: 1723px)" alt="Vestido de novia con alas de ángel."></source>
                <source srcset="<?= get_stylesheet_directory_uri(); ?>/assets/images/intro/novia/desktop.png" media="(min-width: 1366px)" alt="Vestido de novia con alas de ángel."></source>
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/intro/novia/mobile.png" alt="Vestido de novia con alas de ángel.">
            </picture>
            <div class="intro__fotos-article-info">
                <span>Vestido de novia</span>
                <a href="">Ver ahora</a>
            </div>
            <div class="intro__fotos-article-curtain"></div>
        </article>

        <article class="intro__fotos-article intro__fotos-article--quince">
            <picture class="intro__fotos-article-picture intro__fotos-article-picture--quince">
                <source srcset="<?= get_stylesheet_directory_uri(); ?>/assets/images/intro/quince/desktop.png" media="(min-width: 1723px)" alt="Vestido de quince años con estilo del mar."></source>
                <source srcset="<?= get_stylesheet_directory_uri(); ?>/assets/images/intro/quince/laptop.png" media="(min-width: 1366px)" alt="Vestido de quince años con estilo del mar."></source>
                <img src="<?= get_stylesheet_directory_uri(); ?>/assets/images/intro/quince/mobile.png" alt="Vestido de quince años con estilo del mar.">
            </picture>
            <div class="intro__fotos-article-info">
                <span>Vestido de quince</span>
                <a href="">Ver ahora</a>
            </div>
            <div class="intro__fotos-article-curtain"></div>
        </article>

    </section>

    <img class="intro__maktub" src="<?= get_stylesheet_directory_uri(); ?>/assets/images/maktub.png" alt="logo MAKTUB">

</section>