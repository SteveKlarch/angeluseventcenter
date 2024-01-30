// Este archivo se encarga de del panel de control de la sesión de un miembro del equipo

window.addEventListener('load', function() {
    
    if(document.getElementById('panel-mobile')) {

        const panelMobile = document.getElementById('panel-mobile');

        panelMobile.addEventListener('click', buttonActions);

    }

});

function buttonActions() {

    if(document.getElementById('control-panel')) {
        
        const controlPanel = document.getElementById('control-panel');

        controlPanel.addEventListener('click', function(e) {
            if(e.target.classList.contains('button-panel')) {
                
                let value = e.target.value;
                showInterface(value);

            }
        });

    }

}