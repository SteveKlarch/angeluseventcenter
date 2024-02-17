window.addEventListener('load', function() {
    if(document.getElementById('new')) {
        showEvents();
    }
});

function showEvents() {

    showBackButton();
    prepareButtonEvents();
    rolesClick();
    submitForm();

}

function rolesClick() {

    let roleArray = document.getElementsByClassName('new__form-roles-label--role');

    for(let i = 0; i < roleArray.length; i++) {

        roleArray[i].addEventListener('click', function(e) {

            roleArray[i].classList.toggle('new__form-roles-label--role-active');

        });

    }

}

function showBackButton() {

    // Creamos el botón para back para retroceder con el valor back-home.
    const backButton = createButton('new', 'button', 'back-home', 'new-member-back-button', 'new__back', '<i class="fa-solid fa-arrow-left"></i>');
    backButton.classList.add('show-up');

}

function prepareButtonEvents() {

        // console.log('todo bien');
        const backButton = document.getElementById('new-member-back-button');
    
        backButton.addEventListener('click', function(e) {
    
            if(backButton.value == 'back-prev') {
                backButton.value = 'back-home';
            } else if(backButton.value == 'back-home') {
                window.location.assign(member.url_panel);
            }
    
        });

}

function submitForm() {

    const memberForm = document.getElementById('member-form');
    
    memberForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const form      = new FormData(memberForm);
        const dataParse = new URLSearchParams(form); 

        const request = await fetch(`${member.url_api}/angelus/members/new-member`, {
            method: 'POST',
            body: dataParse
        });

        const response = await request.json();
        console.log(response);

        if(response.status == 400) {
            window.location.assign(response.message);
        }

    });

}