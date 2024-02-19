// Funciones para las rutas.
function documentInit() {
    // Separamos los elementos de la URL por / y tomamos el último elemento de la ruta.
    let route = window.location.pathname.split('/')[1];

    // Con base al valor obtenido del último elemento, desplegamos un panel de inicio.
    if(route == 'panel') {

        panelMenu();
        addPanel();

    } else {
        clientMenu();
    }
}

// Funciones para el menu de los miembros.
function panelMenu() {

    // Comprobación básica para ver cuál es la dimensión de la pantalla

    if(document.getElementById('content-panel')) {

        if(window.screen.width < 1366) {
            // Desplegamos el panel para mobile.
            panelMobile();
        } else {
            // Deslegamos el panel para desktop.
            panelDesktop();
        }

    }

}

// Función para el menú de los clientes.
function clientMenu() {

    // Comprobación básica para ver cuál es el ancho de la pantalla
    if(window.screen.width < 1366) {
        // Depslegar el menú para mobile.
        clientMobile();
    } else {
        // Desplegar el menú para desktop.
        clientDesktop();
    }

}

// MEMBERS

// Panel para mobile.
function panelMobile() {

    // Creación del header del Panel Mobile
    createElement('header', 'member-menu member-menu--mobile', 'panel-mobile', '');

    // Insersión del elemento principal que contendrá las opciones del panel mobile.
    createElement('ul', 'member-menu--mobile-ul', 'ul-mobile', '', document.getElementById('panel-mobile'));

    // Insersión de los elementos secundarios que serán hijos del elemento principal.
    let itemsPanelMobile = [
        {
            type: 'li',
            class: 'member-menu--mobile-ul-li',
            id: 'burguer',
            content: `<a><img class="burguer-icon" id="burguer-icon" src="${universal.burguer_icon}" /></a>`
        }, {
            type: 'li',
            class: 'member-menu--mobile-ul-li pop',
            id: 'add',
            content: `<a><img class="add-icon" id="add-icon" src="${universal.add_icon}" /></a>`
        }, {
            type: 'li',
            class: 'member-menu--mobile-ul-li pop',
            id: 'store',
            content: `<a><img class="store-icon" id="store-icon" src="${universal.store_icon}" /></a>`
        }
    ];

    // Iteramos sobre el elemento padre para insertar uno a uno los elementos hijos en el header.
    itemsPanelMobile.forEach(item => {

        createElement(item.type, item.class, item.id, item.content, document.getElementById('ul-mobile'));

    });

    // Le agregamos una clase para animar el header al momento de entrar en el sitio de gestión de la Boutique.
    document.getElementById('panel-mobile').classList.add('member-menu--up');
    // Añadimos un escuchador de eventos al momento de hacer tap en los elementos del header.
    document.getElementById('ul-mobile').addEventListener('click', tap);

}

// Panel para desktop.
function panelDesktop() {
    console.log('Este panel es Desktop');
}

function addPanel() {

    document.getElementById('panel-mobile').addEventListener('click', function(e) {
        e.preventDefault();

        // Comprobamos que el miembro le dé click a uno de los botones del header principal.
        if(e.target.classList.contains('add-icon') && !document.getElementById('control-panel')) {
            showAddPanel();
        } else if(e.target.classList.contains('burguer-icon')) {
            showControlPanel();
        } else {
            showStorePanel();
        }

    });
    
}

// Paneles de control

function showAddPanel() {

    // Inmobilizamos el scroll vertical.
    document.body.style.overflowY = 'hidden';

    // Superposición de cortina para bloquear capa de interfaz
    createElement('div', 'curtain-panel', 'curtain-panel', '');
    // Superposición de panel para dar acceso a las opciones de creación
    createElement('div', 'control-panel', 'control-panel', '');
    // Desarrollo
    const controlPanel = document.getElementById('control-panel');

    // Insertamos los elementos al panel de control desplegado.
    let itemsControlPanel = [
        {type: 'div', class: 'control-panel__item', id: '', content: '<h3><i class="fa-solid fa-plus"></i> Nuevo</h3>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="new-prd"><i class="fa-solid fa-bag-shopping"></i> Producto</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="new-cat"><i class="fa-solid fa-heart"></i> Categoría</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="new-compr"><i class="fa-regular fa-credit-card"></i> Compra</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="new-prs"><i class="fa-solid fa-mug-saucer"></i> Presupuesto</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="new-ins"><i class="fa-solid fa-star"></i> Inspo</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="new-pst"><i class="fa-solid fa-newspaper"></i> Post</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="new-feath"><i class="fa-solid fa-feather"></i> Feather</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="new-ad"><i class="fa-solid fa-bullhorn"></i> Anuncio</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="new-alid"><i class="fa-solid fa-handshake"></i> Aliado</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="new-miem"><i class="fa-solid fa-user"></i> Miembro</button>'}
    ];

    itemsControlPanel.forEach(item => {

        createElement(item.type, item.class, item.id, item.content, controlPanel);

    });

    // Incrustamos el panel invocado con un slide hacia la derecha.
    document.getElementById('control-panel').classList.add('control-panel--slide');

    // Agregamos un evento escuchador que permita borrar el panel de control desplegado en caso de retroceder.
    document.addEventListener('click', function(e) {
        e.preventDefault();

        // Ejecutamos una acción en el área invocada según el área clicada pro el miembro.
        if(e.target.classList.contains('curtain-panel')) {

            document.body.style.overflowY = 'scroll';

            removeElement('control-panel');
            removeElement('curtain-panel');

        } else if(e.target.classList.contains('button-panel')) {
            tap(e, 'button-panel');
        }

    });

}

function showControlPanel() {

    document.body.style.overflowY = 'hidden';

    createElement('div', 'control-panel', 'control-panel', '');
    const controlPanel = document.getElementById('control-panel');

    let itemsControlPanel = [
        {type: 'div', class: 'control-panel__item', id: '', content: '<h3><i class="fa-solid fa-square-poll-vertical"></i> Panel</h3>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="panel-prd"><i class="fa-solid fa-people-group"></i> Aliados</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="panel-cat"><i class="fa-solid fa-atom"></i>Centro de anuncios</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="panel-compr"><i class="fa-solid fa-feather"></i> Feather</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="panel-prs"><i class="fa-solid fa-bell"></i> Notificaciones</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="panel-ins"><i class="fa-solid fa-sitemap"></i> Equipo</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="panel-pst"><i class="fa-solid fa-chart-line"></i> Actividad</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel button-panel--logout" value="panel-logut"><i class="fa-solid fa-door-open"></i> Salir</button>'}
    ];

    itemsControlPanel.forEach(item => {

        createElement(item.type, item.class, item.id, item.content, controlPanel);

    });

    createElement('div', 'curtain-panel', 'curtain-panel', '');
    document.getElementById('control-panel').classList.add('control-panel--slide');

    document.addEventListener('click', function(e) {

        e.preventDefault();

        if(e.target.classList.contains('curtain-panel')) {

            document.body.style.overflowY = 'scroll';

            removeElement('control-panel');
            removeElement('curtain-panel');

        } else if(e.target.classList.contains('button-panel')) {

            tap(e, 'button-panel');

        }

    });

}

function showStorePanel() {
    console.log('store');
}

// CLIENTS

function clientMobile() {
    console.log('Este menu es mobile');
}

function clientDesktop() {
    console.log('Este menu es Desktop');
}

// INTERFACES

// Mostrar interfaz

function showInterface(type, value) {
    loadingView();
    // Con base al valor capturado por el element contenido en el panel desplegado, redirigimos a una interfaz.
    if(value == 'logut') {
        window.location.assign(`${object.url_logout}`);
    } else {
        window.location.assign(`${object.url_create}?type=${value}&interface=${type}`);
    }
}

// Funciones relacionadas con el archivo create.js
function interfaceView(interface, type) {

    let body = '';

    // 1. Atrapamos el parámetro de la URL capturada 
    // let type      = urlCreate.search.split('&')[1];

    // 2. Manipulamos el parámetro atrapado
    if(type == 'prd') {

        body = ``;

    } else if(type == 'cat') {

    } else if(type == 'compr') {

    } else if(type == 'prs') {

    } else if(type == 'ins') {

    } else if(type == 'pst') {

    } else if(type == 'feath') {

    } else if(type == 'ad') {

    } else if(type == 'alid') {

    } else if(type == 'miem') {
// Continue...
        createElement('div', 'interfa');

        let body = `

            <div class="interface__form-bd">

                <h2 class="interface__form-bd-title">Comencemos con lo básico para crear un nuevo miembro...</h1>

                <label class="interface__form-bd-label" for="member-name"></label>
                <input class="interface__form-bd-input--name" id="member-name" placeholder="Nombre del nuevo miembro" name="member[name]" type="text" />
        
                <label class="interface__form-bd-label" for="member-email"></label>
                <span class="interface__form-bd-span">Email</span>
                <input class="interface__form-bd-input" id="member-email" name="member[email]" placeholder="example@example.com" type="email" />

                <label class="interface__form-bd-label" for="member-password"></label>
                <span class="interface__form-bd-span">Contraseña</span>

                <div class="interface__form-bd-superlabel">
                    <input class="interface__form-bd-superlabel-input" id="member-password" placeholder="coloca una contraseña aquí" name="member[password]" type="password" />
                    <i id="reveal" class="fa-solid fa-eye"></i>
                </div>
        
            </div>

            <div class="interface__form-roles">

                <h2 class="interface__form-roles-title">Ahora, elije el rol que tendrá el nuevo miembro...</h1>

                <label class="interface__form-roles-label--role" for="admin">
                    <article class="interface__form-roles-label--role-article">
                        <i class="fa-solid fa-flag"></i>
                        <div class="interface__form-roles-label--role-article">
                            <h3>Administrador</h3>
                            <p>Obtén un panorama completo de la actividad de la boutique, gestiona miembros y aprueba permisos.</p>
                        </div>
                    </article>
                </label>
                <input id="admin" name="member[role]" class="interface__form-roles--checkbox" type="checkbox" value="admin" />

                <label class="interface__form-roles-label--role" for="gestor">
                    <article class="interface__form-roles-label--role-article">
                        <i class="fa-solid fa-person-dress"></i>
                        <div class="interface__form-roles-label--role-article">
                            <h3>Gestor</h3>
                            <p>Crea y edita vestidos, utiliza la pasarela de pago de Angelus Event Center
                            y guía a tus clientes a obtener el mejor modelo.</p>
                        </div>
                    </article>
                </label>
                <input id="gestor" name="member[role]" class="interface__form-roles--checkbox" type="checkbox" value="gestor" />

                <label class="interface__form-roles-label--role" for="ejecutivo">
                    <article class="interface__form-roles-label--role-article">
                        <i class="fa-solid fa-user-tie"></i>
                        <div class="interface__form-roles-label--role-article">
                            <h3>Ejecutivo</h3>
                            <p>Presupuesta clientes y comparte los resultados.</p>
                        </div>
                    </article>
                </label>
                <input id="ejecutivo" name="member[role]" class="interface__form-roles--checkbox" type="checkbox" value="ejecutivo" />

                <label class="interface__form-roles-label--role" for="planificador">
                    <article class="interface__form-roles-label--role-article">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <div class="interface__form-roles-label--role-article">
                            <h3>Planificador</h3>
                            <p>Toma el control de la revista Angelus y todos los medios de comunicación del sitio.</p>
                        </div>
                    </article>
                </label>
                <input id="planificador" name="member[role]" class="interface__form-roles--checkbox" type="checkbox" value="planificador" />

                <label class="interface__form-roles-label--role" for="anunciante">
                    <article class="interface__form-roles-label--role-article">
                        <i class="fa-solid fa-bullhorn"></i>
                        <div>
                            <h3>Anunciante</h3>
                            <p>Crea y gestiona anuncios en el sitio de Angelus.</p>
                        </div>
                    </article>
                </label>
                <input id="anunciante" name="member[role]" class="interface__form-roles--checkbox" type="checkbox" value="anunciante" />

                <button type="submit" id="create-new-member" class="interface__form-roles-button">Crear miembro</button>
    
            </div>
        `;

        // Creación del formulario.
        createForm(interface, 'post', 'member-form', 'new__form', body);

    } else {
        logout();
    }

}

function logout() {
    fetch(`${object.url_api}/angelus/members/logout`, {
        method: 'GET'
    }).then(response => {

        if(response) {
            loadingView();
            location.assign(object.url_team);
        }

    });
}

// Función para crear un elemento

function createElement(type, c, i = '', content = '', father = document.body) {

    const element = document.createElement(type);
    element.setAttribute('id', i);
    element.setAttribute('class', c);

    if(content.length != 0) {
        element.innerHTML = content;
    }

    father.appendChild(element);
    return document.getElementById(i);

}

function createForm(interface, method = 'get', i, c, body = '') {

    const form = document.createElement('form');
    form.setAttribute('action', './');
    form.setAttribute('method', method);
    form.setAttribute('id', i);
    form.setAttribute('class', c);
    form.innerHTML = body;
    document.getElementById(interface).appendChild(form);
    // Activamos los eventos del formulario
    memberInputs('member-password', 'reveal');

    return document.getElementById(i);

}

function createButton(fatherID, type, value, i, c, content) {

    const button = document.createElement('button');
    button.setAttribute('id', i);
    button.setAttribute('class', c);
    button.setAttribute('type', type);
    button.setAttribute('value', value);
    button.innerHTML = content;
    document.getElementById(fatherID).appendChild(button);
    return document.getElementById(i);

}

// Función para cargar elementos

function loadItems(father, quty = 1) {

    for(let i = 0; i < quty; i++) {
        element = createElement('div', 'load-item', '', father);
    }

}

// Función para eliminar elementos

function removeElement(id) {

    if(document.getElementById(id)) {

        document.getElementById(id).remove();

    }

}

// ANIMACIONES

// Tap de los botones.
function tap(e, c = '') {
    e.preventDefault();

    let icon = e.target.id;
    // Dependiendo del tipo de ícono que está en el header, agregamos una animación para darle vida al momento de hacer tap.
    if(icon == 'add-icon') {

        // Aquí agregamos una clase para incrustar la animación.
        document.getElementById(icon).classList.add('spin');
        // Aquí procedemos a quitar la clase agregada para quitar la animación y volver a reutilizar la clase.
        setTimeout(() => {
            document.getElementById(icon).classList.remove('spin');
        }, 550);

    } else if(icon == 'store-icon') {

        document.getElementById(icon).classList.add('tap');
        setTimeout(() => {
            document.getElementById(icon).classList.remove('tap');
        }, 550);

    } else if(icon == '') {

        e.target.classList.add('button-tap');
        setTimeout(() => {
            e.target.classList.remove('button-tap');
        }, 550);

    }



}

// Cargador.
function loadingView() {

    // Creamos un elemento "nulo" para insertar en los tiempos de carga.
    const bodyHome = `
                        
            <section id="authenticate" class="authenticate">

            <div class="authenticate__header">
                <span class="authenticate__header-item"></span>
                <span class="authenticate__header-item authenticate__header-item--second"></span>
                <span class="authenticate__header-item"></span>
            </div>
                <div class="authenticate__header">
                    <span class="authenticate__header-item"></span>
                    <span class="authenticate__header-item authenticate__header-item--second"></span>
                    <span class="authenticate__header-item"></span>
                </div>
                <div class="authenticate__panel">
                    <span class="authenticate__panel-item"></span>
                    <span class="authenticate__panel-item"></span>
                </div>
                <div class="authenticate__footer">
                    <span class="authenticate__footer-item"></span>
                    <span class="authenticate__footer-item authenticate__footer-item--second"></span>
                    <span class="authenticate__footer-item"></span>
                </div>
                <div class="authenticate__footer">
                    <span class="authenticate__footer-item"></span>
                    <span class="authenticate__footer-item authenticate__footer-item--second"></span>
                    <span class="authenticate__footer-item"></span>
                </div>

            </section>

    `;

    createElement('div', 'team-home__init', 'team-home-init', bodyHome);
    document.getElementById('team-home-init').classList.add('team-home__init--go');

}

function buttonEvents(backbuttonID, oneSection = '', twoSection = '') {

    backButtonEvent(backbuttonID, oneSection, twoSection);

}

function moveLeft(element) {
    element.classList.add('move-left');
} 

function moveNeutral(element) {
    element.classList.add('move-neutral');
}

function moveRight(element) {
    element.classList.add('move-right');
}

// Eventos del formulario
function memberInputs(inputID = '', itemID = '') {

    // Script del cmapo contraseña
    if(document.getElementById(inputID)) {
        let input = document.getElementById(inputID);
        let eye   = document.getElementById(itemID);
        eye.addEventListener('click', function(e) {
            e.preventDefault();
    
            if(input.type == 'password') {
                input.type           = 'text';
                e.target.style.color = '#9f9f9f';
            } else {
                input.type           = 'password';
                e.target.style.color = '#c7c7c7';
            }
    
        });
    }

}

// Messages

function messagesLoading(fatherID) {

    let messages = [
        {
            icon: '<i class="fa-solid fa-wand-magic-sparkles magic"></i>',
            message: 'El lugar donde los sueños de amor se hacen realidad.'
        },
        {
            icon: '<i class="fa-solid fa-bag-shopping"></i>',
            message: 'Desde la sección "producto" podrás agregar vestidos nuevos.'
        },
        {
            icon: '<i class="fa-solid fa-heart"></i>',
            message: 'Desde la sección "categorías" podrás agrupar una serie de productos por una característica en común.'
        },
        {
            icon: '<i class="fa-regular fa-credit-card"></i>',
            message: 'Con el botón de compra puedes facturar pedidos a los clientes.'
        },
        {
            icon: '<i class="fa-solid fa-mug-saucer"></i>',
            message: 'Puedes crear y compartir presupuestos con clientes para llevar un orden de los eventos.'
        },
        {
            icon: '<i class="fa-solid fa-wand-magic-sparkles magic"></i>',
            message: 'El lugar donde los sueños de amor se hacen realidad.'
        },
        {
            icon: '<i class="fa-solid fa-star"></i>',
            message: '¡Ideas para eventos! Puedes publicar mediante una Inspo lo que el Centro de Eventos puede hacer.'
        },
        {
            icon: '<i class="fa-solid fa-newspaper"></i>',
            message: 'Crea tendencias mediante posts que puedes publicar en la revista Angelus.'
        },
        {
            icon: '<i class="fa-solid fa-feather"></i>',
            message: 'Los usuarios siempre quieren saber qué está pasando con la boutique, por eso, manifiéstate con comentarios puntuales en Feathers, el muro de Angelus.'
        },
        {
            icon: '<i class="fa-solid fa-bullhorn"></i>',
            message: 'Crea y autoriza anuncios para que salgan en partes del sitio web.'
        },
        {
            icon: '<i class="fa-solid fa-handshake"></i>',
            message: 'Crea y gestiona los aliados desde el panel de aliados.'
        },
        {
            icon: '<i class="fa-solid fa-user"></i>',
            message: 'El equipo lo es todo en la boutique, por ello, crea y gestiona los miembros existentes.'
        },
        {
            icon: '<i class="fa-solid fa-wand-magic-sparkles magic"></i>',
            message: 'El lugar donde los sueños de amor se hacen realidad.'
        }
    ];

    let random = Math.floor(Math.random()*10) + 1;

    document.getElementById(fatherID).innerHTML = `
        
        ${messages[random].icon}
        <span>${messages[random].message}</span>

    `;

    authenticateMessage(messages, fatherID, random++);

}

function authenticateMessage(messages, ID, count) {

    if(document.getElementById(ID)) {

        count++;

        if(count < messages.length) {

            setTimeout(() => {

                if(document.getElementById(ID)) {
        
                    document.getElementById(ID).innerHTML = `
                
                        ${messages[count].icon}
                        <span>${messages[count].message}</span>
                
                    `;

                    authenticateMessage(messages, ID, count);

                }
    
            }, 5000);
    
        }
    }



}

