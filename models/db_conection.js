import mysql from "mysql2/promise"; 

const datos_conexion_db_local = {
    host: "localhost", 
    user: "root", 
    port: 3306, 
    password: "mauriciosql", 
    database: "db_app_web_25"
}; 

const dbconection = await mysql.createConection(datos_conexion_db_local); 

export default dbconection; 
