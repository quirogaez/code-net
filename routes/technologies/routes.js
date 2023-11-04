import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import getTechnologies from '../../services/technologies.js'

// Ruta para subir imágenes

const router = Router()

router.post('/project', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    console.log("Sí sirve el POST");
    const {body} = req.body;
    try {
        data = await getTechnologies(url)
    } catch (e) {

    }
});


export default router; 