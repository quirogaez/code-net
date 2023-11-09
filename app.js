// Importa los módulos necesarios
import express from 'express';
import mongoose from 'mongoose';  
import dotenv from 'dotenv';
import helmet from 'helmet';
/* import morgan from 'morgan'; */
import routes from "./routes/routes.js";
import path from 'node:path';
import twitchAuth from './config.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import fileUpload from 'express-fileupload';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


// Obtiene la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
/* Se maneja al sesion en mongodb */

// Configura las variables de entorno
dotenv.config();



// Crea una instancia de Express
const app = express();

app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGOOSE_URL }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));
 


// Configura Express para servir archivos estáticos desde la carpeta "static"
app.use(express.static('static'));

// Configura las rutas definidas en "routes.js" bajo el prefijo "/codenet"
app.use('/codenet', routes);

// Conecta a la base de datos MongoDB usando la URL definida en las variables de entorno
// Establece EJS como el motor de plantillas (opcional, está comentado)
// app.set('view engine', 'ejs');

// Especifica la ubicación de las vistas (plantillas) en la carpeta "static/templates"
app.set('views', path.join(`${__dirname}`, "static", "templates"));

// Aplica middlewares para procesar solicitudes y mejorar la seguridad
app.use(express.json()); // Middleware para analizar datos JSON en las solicitudes
app.use(fileUpload());
/* app.use(helmet()); // Middleware para mejorar la seguridad de la aplicación
*//* app.use(morgan("tiny")); // Middleware para el registro de solicitudes HTTP */


(async () => {
    // app.js
    if (!process.env.twitchAUTH) {
        (async () => {
            process.env["twitchAUTH"] = await twitchAuth();

        })().then( ()=> {
            console.log(process.env.twitchAUTH)
        })
    }

    // Conecta a la base de datos MongoDB usando la URL definida en las variables de entorno
    await mongoose.connect(process.env.MONGOOSE_URL)
        .then(() => {
            console.log("Connected to MONGODB");
        })

    const PORT = process.env.PORT || 8080


    // Inicia el servidor en el puerto 8080
    app.listen(PORT, () => {
        console.log("Server is running");
    });
})()




