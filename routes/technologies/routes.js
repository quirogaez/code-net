import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import getTechnologies from '../../services/technologies.js'

// Ruta para subir imágenes

const router = Router()

router.post('/technologies', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    console.log("Sí sirve el POST");
    const {url} = req.body;
    try {
        const data = await getTechnologies(url);
        res.status(200).json({data: data})
    } catch (e) {
        res.status(400).json({error: e})
    }
});


export default router; 