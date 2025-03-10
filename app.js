import express from "express";
import { fracesRouter } from "./routes/rutas_fraces.js";

const app = express(); 

// definimos el sistema de plantillas 

app.set("view engine", "ejs"); 

app.use(express.json()); 

app.disable("x-powered-by");

app.use(express.static("public"));

app.get ("/", (req, res) => {
    res.render("index");
});

app.use("/fraces", fracesRouter); 

const PORT = process.env.PORT ?? 3005;

app.listen(PORT, () => {
    console.log("Servidor corriendo en: http://localhost:", PORT);
}); 
