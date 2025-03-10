import { Router } from "express"; 

export const fracesRouter = Router(); 

fracesRouter.get("/mensaje_prueba", (req, res) => {
    res.json({ mensaje_prueba: "Mensaje para probar app_web_express_25"});
});

fracesRouter.get("/mostrar_plantilla_fraces", (req, res) => {

    const dato_local = { mensaje: "mensaje de prueba", datos_02: "más datos para probar" };

    res.render("fraces_01", { dato_local });
}); 
