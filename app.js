import express from 'express';
/* import mongoose from 'mongoose'; */
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from "./routes/routes.js";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config()
const app = express();

/* Configurar lugar de archivos estaticos*/
app.use(express.static('static'));

/* Manejar las rutas */
app.use('/codenet', routes)

/* Configuración base de datos */
/* mongoose.connect(process.env.MONGOOSE_URL)
    .then(() => {
        console.log("Connected to MONGODB");
}); */
 
// Establecer EJS como el motor de plantillas
/* app.set('view engine', 'ejs'); */

// Especificar la ubicación de las vistas (plantillas)
app.set('views', `${__dirname}\\static\\templates\\`); // Ruta a la carpeta de vistas

//Middlwares
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

/* Levantar servidor */
app.listen(8081, () => {
    console.log("Server is running");
})
