import { BlogModel } from "./modelo_blog_local.js";


export class BlogController {

    static async obtenerPosteos (req, res) {

        const datosPosteos = await BlogModel.obtenerPosteos();  

        //console.log("datos posteos: ", datosPosteos); 

        res.render("templates_blog/blogSurCode25", { datos: datosPosteos });

    }



}