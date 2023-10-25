import authRoutes from './auth/routes.js';
import structureRoutes from './structure/routes.js';
import formsRoutes from './forms/routes.js';

import express, { Router } from 'express';
const router = Router();


router.use('', authRoutes);
router.use('', structureRoutes);
router.use('', formsRoutes);
export default router; 