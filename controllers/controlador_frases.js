import { FrasesModel } from "../models/modelo_frases.js";
//import { comprobarAutorFrase } from "./verificacion_frases.js";

export class FracesController {
    
    static async obtenerFrases(req, res) {
        const frases = await FrasesModel.obtenerFrases();
        const arreglo_frases = frases[0]
       
        res.render("fraces_01",{ arreglo_frases });

    }

    static async traerAutores(req, res) {
        const autores = await FrasesModel.obtenerAutoresFrases(); 
        
        res.json(autores[0]);
    }
    
    
    static async agregar_frase_nuevo(req, res) {

        const frase_ingresada = req.body.nueva_frace;
        const autor_nuevo = req.body.nuevo_autor;

        const autores_existentes = await FrasesModel.obtenerAutoresFrases(); 

        const frases_existentes = await FrasesModel.obtenerFrases(); 

        // recordar que trabajamos con dos tablas: frases_celebres y autor_frase.

        let id_autor = 0;

        // si el autor existe, en id_autor se guarda el valor del id del autor existente.
        // si el autor ingresado no existe, id_autor sigue valiendo "0", ya que no entra en el if.
        autores_existentes[0].forEach(autor => {
            if (autor.nombre === autor_nuevo) {
                id_autor = autor.id;
            }
        });

        // verificamos si la frase ingresada existe en la base de datos.

       if (frases_existentes[0].some(frase => frase.frace === frase_ingresada)) {
            return res.json({ mensaje: "La frase ingresada ya existe en la base de datos"});
       } else {
            // si la frase no existe en la base de datos, la guardamos.

            // si el autor ingresado ya exite, guardamos la frase con el id del autor existente.
            if (id_autor !== 0) {
                //console.log("id del autor existente: ", id_autor);
                await FrasesModel.agregarFrase(id_autor, frase_ingresada);
            } else {
                // si el autor ingresado no existe en la base de datos, primero guardamos el autor 
                // en la tabla de autores y obtenemos los datos del autor ingresado en datos_autor_ingresado.
                // Desde los datos obtenidos obtenemos el id del autor ingresado en el campo: "insertId".

                const datos_autor_ingresado = await FrasesModel.agregarAutorFrase(autor_nuevo);

                const id_nuevo_autor = datos_autor_ingresado[0].insertId;

                const datos_frase_ingresada = await FrasesModel.agregarFrase(id_nuevo_autor, frase_ingresada);

            }

       }

       /*
       Datos obtenidos al ingresar un autor: 
        [
            ResultSetHeader {
                fieldCount: 0,
                affectedRows: 1,
                insertId: 9,
                info: '',
                serverStatus: 2,
                warningStatus: 0,
                changedRows: 0
            },
            undefined
        ]
       Datos al ingresar una frase: 
       [
            ResultSetHeader {
                fieldCount: 0,
                affectedRows: 1,
                insertId: 7,
                info: '',
                serverStatus: 2,
                warningStatus: 0,
                changedRows: 0
            },
            undefined
        ]
       */
       
        res.json({ mensaje: "Los datos se guardaron en la base de datos satisfactoriamente." }); 
        
    }

    static async agregar_frace(req, res) {

        const frace_nueva = req.body.nueva_frace;
        const autor_nuevo = req.body.nuevo_autor;
       
       //console.log("controlador_fraces -> frace: ", frace_nueva);
        //console.log("controlador_fraces -> autor: ", autor_nuevo);

        // obtenemos los autores para verificar si el autor ingresado existe.
        const autores = await FrasesModel.obtenerAutoresFrases();

        const frases = await FrasesModel.obtenerFrases();

        autores[0].forEach(autor => {

            if (autor.nombre === autor_nuevo) {
                console.log("El autor ya existe");
                
                if (frases && frases[0].some(frase => frase.frace === frace_nueva)) {
                    console.log("la frase ya existe");
                    return "frase y autor ya existen";
                } else {
                    const datos_frase_agregada = FrasesModel.agregarFrase(autor.id, frace_nueva);
                    //return "el autor existe pero la frase no";
                    return res.json(datos_frase_agregada);
                    
                }
               
            } 

        });

        //const autor_nuevo_agregado = FrasesModel.agregarAutorFrase(autor_nuevo);

        //const frase_y_autor_nuevos = FrasesModel.agregarFrase(autor_nuevo, frace_nueva); 

        //console.log("frases: ", frases);

        //res.json(autor_nuevo_agregado);
       
        
        /*
        if (autores) {

            if (autores[0].some( autor => autor.nombre === autor_nuevo)) {
                console.log("dentro de si el autor existe");
                console.log("id del autor: ");
                res.json({ mensaje: "El autor ya existe en la base de datos"});
            } else {
                console.log("dentro de si el autor no existe");
                res.json({mensaje: "El autor no existe en la base de datos"});
            }

        } else {
            console.log("dentro de si no llegaron los datos de los autores");
            res.json({ mensaje_autor: "Todavía no llegaron los autores"});
        }
            */
        
       

        //res.json({ mensaje: "Se agregarorn datos nuevos a la tabla fraces" });


    }

    

}
