import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import uploadImage from '../../services/firebase.js'
import fileUpload from 'express-fileupload';
import auth from '../../middlewares/Auth.js'


const router = Router()

/* Borrar si se usa EJS */

router.use(express.json());
router.use(fileUpload());

router.get('/project', auth, (req, res) => {
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'form_project.html');
    res.sendFile(filePath);
});

router.get('/post', auth, (req, res) => {
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'postForm.html');
    res.sendFile(filePath);
});

router.get('/shortclip', auth, (req, res) => {
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'formShortClip.html');
    res.sendFile(filePath);
});




// Ruta para subir imágenes
router.post('/project', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    console.log("Sí sirve el POST");

    // Comprueba si se proporcionó un archivo de imagen en la solicitud
    if (req.files && req.files.imageFile) {
        // Obtén la imagen desde la solicitud
        const image = req.files.imageFile;
        console.log(image);

        try {
            // Llama a la función uploadImage para cargar la imagen y obtén la URL de descarga
            const url = await uploadImage(image);
            console.log(url + "Desde la peticion")
            console.log(url[0] + "Desde la peticion")
            // Guarda la URL de la imagen en una base de datos o realiza cualquier otra acción necesaria

            // Envía una respuesta al cliente con éxito y la URL de la imagen cargada
            res.json({ success: true, url: url });
        } catch (error) {
            // En caso de un error al cargar la imagen, registra el error y envía una respuesta de error al cliente
            console.error('Error al subir la imagen:', error);
            res.status(500).json({ success: false, error: 'Error al subir la imagen' });
        }
    } else {
        // Si no se proporcionó un archivo de imagen en la solicitud, envía una respuesta de error al cliente
        res.status(400).json({ success: false, error: 'No se proporcionó una imagen' });
    }
});






export default router; 