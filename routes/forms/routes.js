import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import uploadImage from '../../services/firebase.js'
import fileUpload from 'express-fileupload';
import getStreams from '../../services/twitch.js'


const router = Router()

/* Borrar si se usa EJS */

router.use(express.json());
router.use(fileUpload());

router.get('/project', (req, res) => {
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'form_project.html');
    res.sendFile(filePath);
});

router.get('/post', (req, res) => {
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'postForm.html');
    res.sendFile(filePath);
});

router.get('/shortclip', (req, res) => {
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'shortClip.html');
    res.sendFile(filePath);
});


//Ruta para obtener streams
router.get('/streams', async (req, res) => {
    const {pag, num} = req.query;
    try{
        const dataStreams = await getStreams({pag, num});
        console.log(dataStreams)
        res.status(200).json({data: dataStreams});
    } catch (e) {
        res.status(500).send("Invalid request");
    }
});


// Ruta para subir imágenes
router.post('/project', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    console.log("Sí sirve el POST");

    if (req.files && req.files.imageFile) {
        // Obténer la imagen desde el request
        const image = req.files.imageFile;
        console.log(image)

        try {
            // Llama a la función uploadImage para cargar la imagen y obtén la URL de descarga
            const url = await uploadImage(image);

            //  Guardarla en una base de datos - PREGUTNAR PROFE ALEx
            
            // Envía una respuesta al cliente
            res.json({ success: true, url });
        } catch (error) {
            console.error('Error al subir la imagen:', error);
            res.status(500).json({ success: false, error: 'Error al subir la imagen' });
        }
    } else {
        res.status(400).json({ success: false, error: 'No se proporcionó una imagen' });
    }
});





export default router; 