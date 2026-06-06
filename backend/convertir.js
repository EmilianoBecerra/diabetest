import fs from "node:fs";
import csv from "csv-parser";

const nombreDelArchivo = "blabla"

const csvFile = `${nombreDelArchivo}`;
const jsonOutputPath = `${nombreDelArchivo}_mapeado.json`;

const foodResult = [];
let headerSkipped = 0;

fs.createReadStream( csvFile ).pipe( csv( {
    skipLines: 4,
    mapHeaders: ( { header } ) => header.trim( )
} ) ).on( "data", ( row ) => {

    const foodName = row["Alimento"] ? row["Alimento"].trim() : null;

    const carbKey = Object.keys( row ).find( key => key.includes( "Carbohidra-tos totales" ) || key.includes( 'Carbohidratos totales' ) );
    const carbValues = carbKey ? parseFloat( row[carbKey].replace( ",", "." ) ) : null;

    if( foodName && !foodName.startsWith( "<" ) && !isNaN( carbValues ) && carbValues > 0 ) {
        const calculatedAmoun = (15 * 100) / carbValues;
        foodResult.push( {
            name: foodName.toLowerCase(),
            category: "cereales",
            carbohydrates: 15,
            subcategory: null,
            amount: Number( calculatedAmoun.toFixed( 1 ) ),
            amount_type:"gramos",
            extent: null,
            extent_type: null ,
            content_type: "solido"
        } );
    }
} ).on( "end", () => {
    const finalJson = {
        foods: foodResult
    };
    fs.writeFileSync( jsonOutputPath, JSON.stringify( finalJson, null, 4 ), "utf-8" );
    console.log( `¡Conversión exitosa! Se procesaron ${foodResult.length} alimentos de tipo cereal.` )
} ).on( "error", (err) => {
    console.error( 'Hubo un error al procesar el archivo:', err )
});