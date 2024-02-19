/**
 * Hijo de: funtions.js 
 * 
 */

if(document.getElementById('interface')) {

    document.addEventListener('DOMContentLoaded', function() {
        
        let urlInput    = new URL(window.location.href);
        let params      = urlInput.search.split('&');
        let type        = params[0].split('=')[1];
        let interface   = params[1].split('=')[1]; 
        // console.log(interface, type);
        interfaceView(interface, type);

    });

}