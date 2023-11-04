// Importa las rutas de diferentes módulos
import authRoutes from './auth/routes.js';       // Rutas relacionadas con la autenticación
import structureRoutes from './structure/routes.js'; // Rutas relacionadas con la estructura
import formsRoutes from './forms/routes.js';       // Rutas relacionadas con los formularios
import twitchRoutes from './twitch/routes.js'; // Rutas relacionadas con la API de twitch
import profileRoutes from './profile/routes.js'; // Rutas relacionadas con el perfil de usuario
import technologiesRoutes from './technologies/routes.js'; // Rutas relacionadas con extraer tecnologias 

import express, { Router } from 'express';

// Crea una instancia de Express Router
const router = Router();

// Monta las rutas de los diferentes módulos en el enrutador principal
router.use('', authRoutes);        // Monta las rutas de autenticación bajo la ruta raíz
router.use('', structureRoutes);   // Monta las rutas de estructura bajo la ruta raíz
router.use('', formsRoutes);    
router.use('', twitchRoutes);     // Monta las rutas de la API de twitch
router.use('', profileRoutes);     // Monta las rutas de perfil de usuario
router.use('', technologiesRoutes);     // Monta las rutas de extraer tecnologias 


// Exporta el enrutador principal que contiene todas las rutas
export default router;
