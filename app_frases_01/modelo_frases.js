import dbconection from "../db_conexiones/db_conection.js"; 

export class FrasesModel {

    /* tablas en base de datos: 
     fraces_01: id (auto_increment), id_autor, frace (text)
     frases_celebres: id (auto_increment), id_autor, frace (text)
     frases_nueva: id, frase, id_autor
     autor_frase: id (auto_increment), nombre (varchar 255)    
     */

    /*
    ejemplo consulta: 
    SELECT e.emp_id , e.first_name , 
    e.last_name FROM employees e 
    INNER JOIN managers m ON m.mgr_id = e.mgr_id WHERE m.mgr_id = 'M01' ;
    
    SELECT m.mgr_id , m.first_name , m.last_name FROM managers m 
    INNER JOIN employees e ON e.mgr_id = m.mgr_id WHERE e.emp_id = 'E03' ;
    */
   
    static async agregarFrase(id_autor, frase) {

        const datos_frase_agregada = await dbconection.query(" INSERT INTO frases_nueva (frase, id_autor) VALUES (?, ?);", 
            [frase, id_autor]);

        return datos_frase_agregada;
        
        // obtenemos autores para comprobar si existe.
        // si no existe el autor, guardamos el autor y obtenemos el id.
        // con el id del autor obtenidos, guardamos la frase y hacemos referencia al id del autor.
        
    }

    static async obtenerFrases() {
        //const frases = await dbconection.query("SELECT * FROM frases_celebres");
        const frases = await dbconection.query("SELECT f.id, f.frase, a.nombre FROM frases_nueva f "
             + "JOIN autor_frase a ON f.id_autor = a.id;");

        return frases;
    }

    static async agregarAutorFrase(autor) {

        //console.log("desde modelo_frases: ", autor);

        const datos_tabla_autor = await dbconection.query("INSERT INTO autor_frase (nombre) VALUES (?);", [autor]);

        return datos_tabla_autor;

    }

    static async obtenerAutoresFrases() {
        const autoresFrases = await dbconection.query("SELECT * FROM autor_frase;");
        //console.log("datos modelo -> autoresFrases: ", autoresFrases);
        return autoresFrases;
    }
    
    static async getAll({ autor }) {

        // para consulta por autor, hacer una consulta similar a esta: 
        // http://localhost:3005/tienda?autor=nombre_autor 

        if (autor) {

            console.log("Se ingresó un autor, hay que hacer algo con esto");

            /* consulta de ejemplo: 
             const categoriaLowerCase = categoria.toLowerCase();
            const [productosPorCategoria] = await dbconexion.query(
                "SELECT productos.*, categorias_02.* FROM productos "
                + "INNER JOIN prod_cat_02 ON productos.id = prod_cat_02.producto_id "
                + "INNER JOIN categorias_02 ON categorias_02.id_cat = prod_cat_02.categoria_id "
                + "WHERE categorias_02.nombre_cat = ?;", [categoriaLowerCase]
            );

            return productosPorCategoria;
            */

        } else {
            console.log("No se ingresó un autor, mostrar todo");

            const [todasLasFrases] = await dbconection.query("SELECT * FROM fraces;"); 

            return todasLasFrases;

        }

        return "Aquí se deben enviar las frases requeridas";

    }; 

    


}