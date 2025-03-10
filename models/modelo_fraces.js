import dbconexion from "./conexion_db.js"; 

export class FracesModel {

    /* tablas en base de datos: 
    fraces_01: id (auto_increment), id_autor, frace (text)
    fraces_02: id (auto_increment), id_autor, frace (text)
    autor_frace: id (auto_increment), nombre (varchar 255)
    */

    /*
    ejemplo consulta: 
    SELECT e.emp_id , e.first_name , 
    e.last_name FROM employees e 
    INNER JOIN managers m ON m.mgr_id = e.mgr_id WHERE m.mgr_id = 'M01' ;
    
    SELECT m.mgr_id , m.first_name , m.last_name FROM managers m 
    INNER JOIN employees e ON e.mgr_id = m.mgr_id WHERE e.emp_id = 'E03' ;
    */
   
    static async getAll({ autor }) {

        // para consulta por autor, hacer una consulta similar a esta: 
        // http://localhost:3005/tienda?autor=nombre_autor 

        if (autor) {

            console.log("Se ingresó un autor, hay que hacer algo conesto");

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

            const [todasLasFraces] = await dbconexion.query("SELECT * FROM fraces;"); 

            return todasLasFraces;

        }

        return "Aquí se deben enviar las fraces requeridas";

    }; 


}