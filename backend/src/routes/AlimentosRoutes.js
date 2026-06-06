import { Router } from "express";
import { obtenerAlimento, obtenerAlimentosPorNombre, obtenerDetallesAlimentos } from "../controllers/AlimentosController.js";


const alimentos = Router( );


alimentos.get( "/alimentos/:name", obtenerAlimentosPorNombre );
alimentos.get( "/alimentos/:name/:descripción", obtenerAlimento );
alimentos.get( "/alimento/:id", obtenerDetallesAlimentos );



export default alimentos;
