export async function obtenerAlimentosPorNombre ( nombreAlimento ) {
  try {
    const response = await fetch( `http://localhost:3000/alimentos/${nombreAlimento}` );
    if (!response.ok) throw new Error(`${response.status}`);
    const alimentos = await response.json();
    return { status: response.status, msg: alimentos };
  } catch ( error ) {
    console.error( error );
    return { status: 400, msg: "El servidor no funciona" };
  }
};

export async function obtenerDetallesDeAlimento ( id ) {
  try {
    const response = await fetch( `http://localhost:3000/alimento/${id}` );
    if ( !response.ok ) throw new Error( `El id no es válido` );
    const data = await response.json();
    return data;
  } catch ( error ) {
    console.error( error );
    return error;
  }
};

export async function enviarDatosComidas ( payload ) {
  const sendInfo = await fetch( "http://localhost:3000/cargarDatos", {
      method: "POST",
      body: payload,
      headers: {
          "content-type": "application/json"
      }
  } )
  return sendInfo.json();
}