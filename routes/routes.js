import authRoutes from './auth/routes.js';
import structureRoutes from './structure/routes.js'
import formRoutes from './forms/routes.js'

import express, { Router } from 'express';
const router = Router();


router.use('', authRoutes);
router.use('', structureRoutes);
router.use('', formRoutes);

export default router; 