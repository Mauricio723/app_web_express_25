import { Router } from "express"; 

import { FracesController } from "../controllers/controlador_frases.js";

export const frasesRouter = Router(); 


frasesRouter.get("/obtener_frases", FracesController.obtenerFrases); 

frasesRouter.get("/mostrar_plantilla_fraces", (req, res) => {
    const dato_local = { mensaje: "mensaje de prueba", datos_02: "más datos para probar" };
    res.render("fraces_01", { dato_local });
}); 

frasesRouter.get("/traer_autores_frases", FracesController.traerAutores); 


frasesRouter.get("/mostrar_formulario_frases", (req, res) => {
    res.render("formulario_frases");
});

// ruta para agregar una frace nueva

frasesRouter.post("/input_frace", FracesController.agregar_frace);

frasesRouter.post("/agregar_frase_nuevo", FracesController.agregar_frase_nuevo);
