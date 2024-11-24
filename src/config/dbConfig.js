// dbConfig.js
import { MongoClient } from "mongodb";

// Variables globales para almacenar el cliente y la conexión a la base de datos
let client;
let db;

const conectarAoBanco = async () => {
    // Verifica si ya existe una conexión abierta
    if (client && db) {
        console.log("Ya estamos conectados a la base de datos.");
        return { client, db };
    }

    try {
        // Crea una nueva conexión sin las opciones obsoletas
        client = new MongoClient(process.env.STRING_CONEXION);
        await client.connect();

        db = client.db("imersao-instabytes");  // Define la base de datos que usarás
        console.log("Conexión con el banco exitosa");

        return { client, db };
    } catch (error) {
        console.error("Falha na conexão com o banco!", error);
        throw new Error("No se pudo conectar a la base de datos");
    }
};

export default conectarAoBanco;
