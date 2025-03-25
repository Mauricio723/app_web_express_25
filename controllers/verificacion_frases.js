import { FrasesModel } from "../models/modelo_frases.js";


const comprobarAutorFrase = async (autor_ingresado) => {

    const autores = await FrasesModel.obtenerAutoresFrases();

    //console.log("autores: ", autores); 

    const arreglo_autores = autores[0];

    let lista_nombres = [];

    if (autores) {

        /*
        arreglo_autores.forEach(autor => {
            lista_nombres.push(autor.nombre);   
        });
        */

       
    
        //console.log("lista_nombres: ", lista_nombres);

        //return "esto está en autores porque llegarosn";

        //return lista_nombres.includes(autor_ingresado);

    } else {
        return "No llegaron los autores";
    }
            
};

/*
 if (autores[0].some( autor => autor.nombre === autor_nuevo)) {
                console.log("dentro de si el autor existe");
                console.log("id del autor: ");
                res.json({ mensaje: "El autor ya existe en la base de datos"});
            } else {
                console.log("dentro de si el autor no existe");
                res.json({mensaje: "El autor no existe en la base de datos"});
            }
*/

export { comprobarAutorFrase };
