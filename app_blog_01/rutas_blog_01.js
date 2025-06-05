import { Router } from "express"; 

import { BlogController } from "./controlador_blog.js";


export const blogRouter = Router(); 


blogRouter.get("/pagina_blog", (req, res) => {
    res.render("templates_blog/blogSurCode25", 
        {  datos_desde_ruta: "Datos enviados desde una ruta para probar include" });
});

blogRouter.get("/obtener_posteos", BlogController.obtenerPosteos);

