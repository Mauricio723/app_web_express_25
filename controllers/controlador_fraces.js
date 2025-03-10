
export class FracesController {

    static async traerFraces(req, res) {
        const datos_prueba = { mensaje: "texto para probar controlador" };

        res.json(datos_prueba);
    }
    
}