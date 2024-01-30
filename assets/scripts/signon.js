document.addEventListener('DOMContentLoaded', function() {

    if(document.getElementById('team-home')) {
        form();
        signon();
    }

});

function form() {  
    
    const remember = document.getElementById('remember');
    remember.addEventListener('click', function(e) {

        if(e.target.value == "false") {
            e.target.value = "true";
        } else if(e.target.value == "true") {
            e.target.value = "false";
        }

    });

}

function signon() {

    if(document.getElementById('form-login')) {

        const formLogin = document.getElementById('form-login');

        formLogin.addEventListener('submit', async function(e) {
            e.preventDefault();

            document.getElementById('team-login').classList.add('team-home__form-perse--button-tap');
            createElement('div', 'team-home__curtain', 'team-home-curtain', '');
            document.getElementById('team-home__curtain--opacity');
            messagesLoading('team-home-curtain');

            setTimeout(() => {
                document.getElementById('team-login').classList.remove('team-home__form-perse--button-tap');
            }, 600);

            let loginCount = 0;
            let bodyForm = '';

            if(loginCount == 0) {

                loginCount++;
                const form      = new FormData(formLogin);
                const dataParse = new URLSearchParams(form);

                const request = await fetch(`${login.url_api}/angelus/members/signon`, {
                    method: 'POST',
                    body: dataParse
                });

                const data = await request.json();

                if(!data) {

                    let message = 'Autenticación correcta.'
                    loadingView();
                    location.assign(login.url_home + '/panel');

                    if(document.getElementById('error-message')) {
                        document.getElementById('error-message').innerHTML = message;
                    } else {
                        createElement('span', 'team-home__form-perse-message', 'error-message', message, document.getElementById('form-login'));
                    }

                } else {

                    loginCount--;
                    removeElement('team-home-curtain');
                    
                }

                if(document.getElementById('error-message')) {
                    document.getElementById('error-message').innerHTML = data;
                } else {
                    createElement('span', 'team-home__form-perse-message', 'error-message', data, document.getElementById('form-login'));
                }

            }
        });

    }

}