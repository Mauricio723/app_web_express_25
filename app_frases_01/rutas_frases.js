import { Router } from "express"; 

import { FrasesController } from "./controlador_frases.js";

export const frasesRouter = Router(); 


frasesRouter.get("/obtener_frases", FrasesController.obtenerFrases); 

frasesRouter.get("/mostrar_plantilla_frases", (req, res) => {
    const dato_local = { mensaje: "mensaje de prueba", datos_02: "más datos para probar" };
    res.render("templates_frases/frases_01", { dato_local });
}); 

frasesRouter.get("/traer_autores_frases", FrasesController.traerAutores); 


frasesRouter.get("/mostrar_formulario_frases", (req, res) => {
    res.render("templates_fraces/formulario_frases");
});

// ruta para agregar una frace nueva

frasesRouter.post("/input_frase", FrasesController.agregar_frase);

frasesRouter.post("/agregar_frase_nuevo", FrasesController.agregar_frase_nuevo);
