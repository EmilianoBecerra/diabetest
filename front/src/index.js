import { agregarComidaYEnviarDatos, enviarDatosServidor } from "./modules/render/cargarComida.js";

const form = document.querySelector( ".form" );

form.addEventListener( "click", ev => { 
    agregarComidaYEnviarDatos( ev );
});

form.addEventListener( "submit", ev => { 
    ev.preventDefault( ); 
    enviarDatosServidor( );
} );


