export const cargarComidaBox = ( comidas ) => {
    const div = document.createElement( "div" );
    div.classList.add("comidaCantidad");
    div.innerHTML = `
        <div class="eliminarCaja"><span data-name="delete-box">X</span></div>
        <input type="text" placeholder="comida" data-name="comida" required>
       <div class="input-wrapper"> <input type="text" data-name="cantidad" placeholder="cantidad" required> <span class="suffix">gr</span> </div>
    `;
   comidas.appendChild( div );
}