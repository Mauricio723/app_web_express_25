import { createRequire } from "node:module"; 

//import dbconnection from "./db_connection.js"; 

const require = createRequire(import.meta.url); 

const readJSON = (path) => require(path); 

export class BlogModel {

    static async obtenerPosteos () {

        let string_archivo_para_buscar = "../datos_locales/posts_blog_01.json"; 

        const datosPost = readJSON(string_archivo_para_buscar); 

        return datosPost;

    }
    

}