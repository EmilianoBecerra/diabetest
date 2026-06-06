import alimentosModel from "../models/AlimentoModel.js"




export const obtenerAlimentosPorNombre = async ( req, res ) => {
    const nombreAlimento = req.params.name;
    const todosAlimentos = await alimentosModel.find( );
    const alimentos = [];
    todosAlimentos.map( alimento => {
        if( alimento.name.includes( nombreAlimento ) ) {
            const alimentoObj = {
                name : alimento.name,
                category: alimento.category,
                subcategory: alimento.subcategory,
                id: alimento._id
            }
            alimentos.push( alimentoObj );
        }
    }
    )
   res.json(alimentos);
}

export const obtenerAlimento = async ( req, res ) => {
    

    const alimento = await alimentosModel.findOne( { name: nombreAlimento } );
    console.log(alimento);
    res.json( [`${alimento.name}`,`${alimento.category}`,`${alimento.subcategory}`, `${alimento.amount}`, `${alimento.extent}`, `${alimento.carbohydrates}` ,  `${alimento.content_type}`] );
}

export const obtenerDetallesAlimentos = async ( req, res ) => {
    console.log(req.params.id);
    const id = req.params.id;

    const detalles = await alimentosModel.findById(id).select("name category amount amount_type extent extent_type content_type");
    res.json( detalles );
}

