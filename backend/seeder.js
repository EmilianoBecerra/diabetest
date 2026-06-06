import mongoose from "mongoose";
import foodsJson from "./foods.json" with { type: "json" }
import Food from "./src/models/AlimentoModel.js"


const importData = async () => {
    try {
        await mongoose.connect( `${process.env.DBNAME}` );

        await Food.deleteMany( );
        await Food.create( foodsJson.foods );
        console.log('🚀 ¡Todo los alimentos de foods.json fueron cargados con éxito!');
        process.exit();
    } catch (error) {
        console.error('🔴 Error al importar los datos:', error);
        process.exit(1);
    }
}


importData();