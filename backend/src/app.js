import express from "express";
import cors from "cors";
import alimentos from "./routes/AlimentosRoutes.js";
const app = express( );

app.use( express.json( ) );
app.use( cors({
    origin: "*"
}) );

app.use(express.urlencoded({ extended: true }))
app.use( alimentos )

app.get( "/", ( req, res ) => {
    res.json( "Hola" );
} )


export default app;