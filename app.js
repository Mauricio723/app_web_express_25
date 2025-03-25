import express from "express";

import multer from "multer"; 

import { frasesRouter } from "./routes/rutas_frases.js";


const app = express(); 

const upload = multer();

app.disable("x-powered-by");

// definimos el sistema de plantillas 

app.set("view engine", "ejs"); 

app.use(express.static("public"));

app.use(express.json()); 

app.use(upload.array());   // con esto obtenemos los datos desde un FormData 

app.get ("/", (req, res) => {
    res.render("index");
});

/*
app.post("/agregar_nueva_frace", (req, res) => {
    //const frace = req.body.nueva_frace;
    //const autor = req.body.nuevo_autor;
    console.log("todo: ", JSON.stringify(req.body));
    console.log("frace: ", req.body.nueva_frace);
    console.log("autor: ", req.body.nuevo_autor);            
    res.json({ mensaje: "Se agregarorn datos nuevos a la tabla fraces" });
});
*/

app.use("/fraces", frasesRouter); 

const PORT = process.env.PORT ?? 3005;

app.listen(PORT, () => {
    console.log("Servidor corriendo en: http://localhost:", PORT);
}); 
