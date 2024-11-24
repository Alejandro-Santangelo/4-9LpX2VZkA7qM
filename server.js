import express from "express";
import dotenv from "dotenv"; // Importa dotenv
import routes from "./src/routes/postsRoutes.js";

dotenv.config(); // Carga las variables de entorno
console.log("Cadena de conexión:", process.env.STRING_CONEXION);

const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia el servidor en el puerto 3000 y muestra un mensaje en la consola
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
