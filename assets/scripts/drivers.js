/*

Hijo de: functions.js
Corre en paralelo a: route.js
*/

// Este archivo se encarga de del panel de control de la sesión de un miembro del equipo. 
// Corre en paralelo junto con algunas funciones del functions.js

// Una vez la ventana esté cargada, se procede a invocar un escuchador de eventos que esté atento
// Cada que se hace click en los botones del header que se muestra a los miembro del equipo, se despliega un
// panel secundario que muestra opciones para trabajar.
// Nota: Debemos invocar la función buttonActions adentro de la verificación de panelMobile para asegurarnos de que todo haya 
// cargado completamente, de lo contrario, obtendremos un error de elementos indefinidos.
window.addEventListener('load', function() {
    
    // Verificamos que el header principal de los miembros esté presente.
    if(document.getElementById('panel-mobile')) {

        const panelMobile = document.getElementById('panel-mobile');
        // Agregamos un escuchador de eventos para el header principal.
        panelMobile.addEventListener('click', buttonActions);

    }

});

// Una vez cargado el header, procedemos a arrojjar la buttonActions function.
function buttonActions() {

    // Verificamos si se ha desplegado el panel de control para agregar un escuchador de eventos que responda al tap.
    if(document.getElementById('control-panel')) {
        const controlPanel = document.getElementById('control-panel');

        // Agregamos el escuchador de eventos para desplegar las interfaces.
        controlPanel.addEventListener('click', function(e) {
            if(e.target.classList.contains('button-panel')) {
                let type = e.target.value.split('-')[0];
                let value = e.target.value.split('-')[1];
                showInterface(type, value);

            }
        });

    }

}