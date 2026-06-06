import { cargarComidaBox } from "./render/cargarComidaBox.js";

const comidas = document.getElementById( "comidas" );
const agregarComida = document.querySelector( ".agregarComida" );
const cerrarCaja = document.querySelector( ".eliminarCaja span" );
const form = document.querySelector( ".form" );


agregarComida.addEventListener( "click", ev => {
    ev.preventDefault( );
    cargarComidaBox( comidas );
} )

form.addEventListener( "submit", ev => {
    ev.preventDefault( );
    const comidasCantidades = document.querySelectorAll(".comidaCantidad");
    const medicion = document.getElementById( "medicion" ).value;
    const comidas = Array.from( comidasCantidades ).map( fila => ( 
        {
            comida: fila.querySelector( '[data-name="comida"]' ).value,
            cantidad: fila.querySelector( '[data-name="cantidad"]' ).value,
        }
    ) )
    const payload = { comidas, medicion };
    const sendInfo = await fetch( "http://localhost:3000/cargarDatos", {
        method: "POST",
        body: payload,
        headers: {
           "content-type": "application/json"
        }
    } )
    return sendInfo.json( );
} );

form.addEventListener( "input", ev => {
   if( ev.target.dataset.name === "cantidad" ) {
    if( ev.target.value >= 0 ) {
        ev.target.nextElementSibling.style.display = "block";
    }
    if( ev.target.value == 0 ) {
        ev.target.nextElementSibling.style.display = "none";
    }
   }    
} );

form.addEventListener( "click", ev => {
    if( ev.target.dataset.name === "delete-box" ) {
        ev.target.parentElement.parentElement.remove();
    }
} );









