export const obtenerAlimentosPorNombre = async ( nombreAlimento ) => {
    try{
        const response = await fetch( `http://localhost:3000/alimentos/${nombreAlimento}` );
        if( !response.ok ) throw new Error( `El nombre no es válido ${response.status}` ); 
        const alimentos = await response.json( );
        return alimentos;
    } catch( error ) {
        console.error( error );
        return error;
    }
}

export const obtenerDetallesDeAlimento = async ( id ) => {
    try {
        const response = await fetch( `http://localhost:3000/alimento/${id}` );
        if ( !response.ok ) throw new Error( `El id no es válido` );
        const data = await response.json();
        return data;
    } catch ( error ) {
        console.error(error);
        return error;
    }
}


