import authRoutes from './auth/routes.js';
import structureRoutes from './structure/routes.js'

import express, { Router } from 'express';
const router = Router();


router.use('', authRoutes);
router.use('', structureRoutes);

export default router; 