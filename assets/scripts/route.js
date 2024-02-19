/* Este archivo permite desplegar funcionalidades dependiendo del tipo de ruta, tales como los escuchadores
del inicio de una sección. Corre en paralelo con el archivo functions.js e interfaces.js para aligerar
carga de código.

Hijo de: functions.js
Corre en paralelo a: interfaces.js
*/

window.addEventListener('load', function() {

    if(document.getElementById('content-panel')) {
        documentInit();
    }

});