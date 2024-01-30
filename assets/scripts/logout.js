document.addEventListener('DOMContentLoaded', function() {

    if(document.getElementById('logout')) {

        fetch(`${lgout.url_api}/angelus/members/logout`, {
            method: 'GET'
        }).then(response => {
            if(response) {
                location.assign(lgout.url_team);
            }
        });

    }

});