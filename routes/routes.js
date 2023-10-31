// Importa las rutas de diferentes módulos
import authRoutes from './auth/routes.js';       // Rutas relacionadas con la autenticación
import structureRoutes from './structure/routes.js'; // Rutas relacionadas con la estructura
import formsRoutes from './forms/routes.js';       // Rutas relacionadas con los formularios

import express, { Router } from 'express';

// Crea una instancia de Express Router
const router = Router();

// Monta las rutas de los diferentes módulos en el enrutador principal
router.use('', authRoutes);        // Monta las rutas de autenticación bajo la ruta raíz
router.use('', structureRoutes);   // Monta las rutas de estructura bajo la ruta raíz
router.use('', formsRoutes);       // Monta las rutas de formularios bajo la ruta raíz

// Exporta el enrutador principal que contiene todas las rutas
export default router;
