// Funciones para el menu de los miembros de equipo

function panelMenu() {

    if(document.getElementById('content-panel')) {

        if(window.screen.width < 1366) {
            panelMobile();
        } else {
            panelDesktop();
        }

    }

}

// Función para el menú de los clientes

function clientMenu() {

    if(window.screen.width < 1366) {
        clientMobile();
    } else {
        clientDesktop();
    }

}

// Members

function panelMobile() {

    // Creación del header del Panel Mobile

    createElement('header', 'member-menu member-menu--mobile', 'panel-mobile', '');

    // Insersión del elemento ul en el header para el Panel Mobile

    createElement('ul', 'member-menu--mobile-ul', 'ul-mobile', '', document.getElementById('panel-mobile'));

    // Insersión de los elementos li en el ul para el Panel Mobile

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

    itemsPanelMobile.forEach(item => {

        createElement(item.type, item.class, item.id, item.content, document.getElementById('ul-mobile'));

    });

    document.getElementById('panel-mobile').classList.add('member-menu--up');
    document.getElementById('ul-mobile').addEventListener('click', tap);

}

function panelDesktop() {
    console.log('Este panel es Desktop');
}

// CLients

function clientMobile() {
    console.log('Este menu es mobile');
}

function clientDesktop() {
    console.log('Este menu es Desktop');
}

// Paneles de control

function showAddPanel() {

    document.body.style.overflowY = 'hidden';

    createElement('div', 'control-panel', 'control-panel', '');
    const controlPanel = document.getElementById('control-panel');

    let itemsControlPanel = [
        {type: 'div', class: 'control-panel__item', id: '', content: '<h3><i class="fa-solid fa-plus"></i> Nuevo</h3>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="prd"><i class="fa-solid fa-bag-shopping"></i> Producto</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="cat"><i class="fa-solid fa-heart"></i> Categoría</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="compr"><i class="fa-regular fa-credit-card"></i> Compra</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="prs"><i class="fa-solid fa-mug-saucer"></i> Presupuesto</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="ins"><i class="fa-solid fa-star"></i> Inspo</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="pst"><i class="fa-solid fa-newspaper"></i> Post</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="feath"><i class="fa-solid fa-feather"></i> Feather</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="ad"><i class="fa-solid fa-bullhorn"></i> Anuncio</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="alid"><i class="fa-solid fa-handshake"></i> Aliado</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="miem"><i class="fa-solid fa-user"></i> Miembro</button>'}
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

function showControlPanel() {

    document.body.style.overflowY = 'hidden';

    createElement('div', 'control-panel', 'control-panel', '');
    const controlPanel = document.getElementById('control-panel');

    let itemsControlPanel = [
        {type: 'div', class: 'control-panel__item', id: '', content: '<h3><i class="fa-solid fa-square-poll-vertical"></i> Panel</h3>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="prd"><i class="fa-solid fa-people-group"></i> Aliados</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="cat"><i class="fa-solid fa-atom"></i>Centro de anuncios</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="compr"><i class="fa-solid fa-feather"></i> Feather</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="prs"><i class="fa-solid fa-bell"></i> Notificaciones</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="ins"><i class="fa-solid fa-sitemap"></i> Equipo</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel" value="pst"><i class="fa-solid fa-chart-line"></i> Actividad</button>'},
        {type: 'div', class: 'control-panel__item', id: '', content: '<button class="button-panel button-panel--logout" value="logut"><i class="fa-solid fa-door-open"></i> Salir</button>'}
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

// Interfaces

// Mostrar interfaz

function showInterface(value) {

    loadingView();
    window.location.assign(`${object.url_create}?type=${value}`);

}

// Mostrar Popup de interfaz

function interfaceView(ID) {

    let body = '';

    // 1. Atrapamos la URL del sitio
    let urlCreate = new URL(window.location.href);
    // 2. Atrapamos el parámetro de la URL capturada 
    let type      = urlCreate.search.split('=')[1];

    // 3. Manipulamos el parámetro atrapado
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

        body = `

            <h1 class="new__title">Crear miembro</h1>

            <label class="new__form-label" for="member-name"></label>
            <input class="new__form-input--name" id="member-name" placeholder="Nombre del nuevo miembro" name="member[name]" type="text" />
        
            <label class="new__form-label" for="member-email"></label>
            <span class="new__form-span">Email</span>
            <input class="new__form-input" id="member-email" name="member[email]" placeholder="example@example.com" type="email" />

            <label class="new__form-label" for="member-password"></label>
            <span class="new__form-span">Contraseña</span>

            <div class="new__form-superlabel">
                <input class="new__form-superlabel-input" id="member-password" placeholder="coloca una contraseña aquí" name="member[password]" type="password" />
                <i id="reveal" class="fa-solid fa-eye"></i>
            </div>

            <button type="submit" id="create-new-member" class="new__form-button">Siguiente</button>
            
            <button type="button" id="new-member-back-button" class="new__back">
                <i class="fa-solid fa-arrow-left"></i>
            </button>
        
        `;

        createForm('new', 'post', 'member-form', 'new__form', body);
        memberInputs('member-password' , 'reveal');

        // Llenar el formulario
        const newMemberForm = document.getElementById('member-form');
        newMemberForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const form = new FormData(newMemberForm);
            next('new', 'member-form', form);
        });


    } else {

        body = `
    
            <span>¿Seguro que deseas salir del panel de control?</span>
            <div class="new__goback-buttons">
                <button class="goback" id="goback">Si, salir ahora</button>
                <button class="goback" id="gocancel">No, cancelar</button>
            </div>

        `;

        createElement('div', 'new__goback', 'interface-goback', body, document.getElementById(ID));
        // Este script afecta el panel de opciones que se le muestran al cliente antes de salir de la sesión. 
        document.getElementById('interface-goback').addEventListener('click', function(e) {
            if(e.target.classList.contains('goback')) {

                if(e.target.id == 'goback') {

                    let curtain = '<i class="fa-solid fa-circle-notch"></i>';

                    createElement('div', 'new__goback--curtain', 'interface-goback-curtain', curtain, document.getElementById('interface-goback'));

                    fetch(`${object.url_api}/angelus/members/logout`, {
                        method: 'GET'
                    }).then(response => {

                        if(response) {
                            loadingView();
                            location.assign(object.url_team);
                        }

                    });

                } else {

                    document.getElementById('gocancel').remove();
                    document.getElementById('interface').remove();

                }

            }
        });


    }

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

}

function createForm(fatherID, method, i, c, body) {

    const form = document.createElement('form');
    form.setAttribute('action', './');
    form.setAttribute('method', method = 'get');
    form.setAttribute('id', i);
    form.setAttribute('class', c);
    form.innerHTML = body;
    document.getElementById(fatherID).appendChild(form);

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

// FUNCIONES PARA LAS RUTAS

function documentInit() {
    let route = window.location.pathname.split('/')[1];

    if(route == 'panel') {
        panelMenu();
        addPanel();
    } else {
        clientMenu();
    }
}

function addPanel() {

    document.getElementById('panel-mobile').addEventListener('click', function(e) {

        e.preventDefault();

        if(e.target.classList.contains('add-icon') && !document.getElementById('control-panel')) {
            showAddPanel();
        } else if(e.target.classList.contains('burguer-icon')) {
            showControlPanel();
        } else {
            showStorePanel();
        }

    });
    
}

// ANIMACIONES

function tap(e, c = '') {
    
    e.preventDefault();

    let icon = e.target.id;

    if(icon == 'add-icon') {

        document.getElementById(icon).classList.add('spin');
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

function loadingView() {

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

function memberInputs(inputID, itemID) {

    let input = document.getElementById(inputID);
    let eye   = document.getElementById(itemID);
    let backButton = document.getElementById('new-member-back-button');

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
    
    document.addEventListener('backbutton', function() {
        document.getElementById('interface').remove();
    });

    backButton.addEventListener('click', function(e) {
        e.preventDefault();

            loadingView();
            window.location.assign('panel');

    });

}

function next(fatherID, formID, form) {

    // Desaparece el formulario base
    document.getElementById(formID).classList.add('next-left');
    setTimeout(() => {
        document.getElementById(formID).remove();

        // Aparece la elección de roles
        body = `
        
            <label class="new__form-label--role" for="gestor">
                <article class="new__form-label--role-article">
                    <i class="fa-solid fa-person-dress"></i>
                    <div class="new__form-label--role-article">
                        <h3>Gestor</h3>
                        <p>Crea y edita vestidos, utiliza la pasarela de pago de Angelus Event Center
                        y guía a tus clientes a obtener el mejor modelo.</p>
                    </div>
                </article>
            </label>
            <input class="new__form--checkbox" id="gestor" type="checkbox" />
            <button type="button" id="new-member-back-button" class="new__back">
                <i class="fa-solid fa-arrow-left"></i>
            </button>
        
        `;
        createForm(fatherID, 'post', 'member-role', 'new__form new__form--roles', body);
        document.getElementById('member-role').classList.add('next-right');
    }, 1000);

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

