import { enviarDatosComidas } from "../api.js";

export function enviarDatosServidor(  ) {
    const comidasCantidades = document.querySelectorAll( ".card-comida" );
    const medicion = document.getElementById( "medicion" ).value;
    const comidas = Array.from( comidasCantidades ).map( fila => ( 
        {
            comida: fila.querySelector( '[data-name="comida"]' ).value,
            cantidad: fila.querySelector( '[data-name="cantidad"]' ).value,
        }
    ) );
    const payload = { comidas, medicion };
    enviarDatosComidas( JSON.stringify( payload ) );
}

export function agregarComidaYEnviarDatos ( ev ) {
    const btnAgregarComida = ev.target.closest( ".agregar-comida" );
    const boxs = document.querySelectorAll( ".card-comida" );
    
    if( ev.target.dataset.name === "delete-box" ) {
        if(boxs.length > 1 ) {
            ev.target.parentElement.remove();
        }
    }
    
    if( btnAgregarComida ) {
        const html = document.querySelector( ".comida-card-temp" ).content;
        const template = html.cloneNode( true );
        comidas.append( template );
    }
}
