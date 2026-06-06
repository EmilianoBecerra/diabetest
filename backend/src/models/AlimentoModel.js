import mongoose from "mongoose";


const FoodSchema = new mongoose.Schema( {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    subcategory:{ type: String, default: null }, 
    amount: { type: Number, default: null },
    amount_type: { type: String, default: null },
    extent: { type: Number, default: null },
    extent_type: { type: String, default: null },
    carbohydrates: { type: Number },
    content_type: { type: String, enum: ["solido", "liquido", "mixto", "unidad"] }
}, { _id: true } );


export default mongoose.model( "Food", FoodSchema  );