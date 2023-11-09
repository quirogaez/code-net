import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import uploadImage from '../../services/firebase.js'
import fileUpload from 'express-fileupload';
import auth from '../../middlewares/Auth.js'
import { projectService } from '../../services/forms/project.js';
import { putUserData} from '../../services/profile/profile.js';

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
        const urlDeploy = req.body.urlProjectDeploy;
        const urlGitHub = req.body.urlGitHub;
        const description = req.body.description;
        const technologies = req.body.technologies;
        const idUser = req.session.userid;
        const typeProject = "project";
        console.log(image);
        
        try {
            // Llama a la función uploadImage para cargar la imagen y obtén la URL de descarga
            const url = await uploadImage(image);
            console.log(url + "Desde la peticion")
            console.log(url[0] + "Desde la peticion")
            // Guarda la URL de la imagen en una base de datos o realiza cualquier otra acción necesaria; de ultimo queda el link de github y antepenultimo el link de el proywcto hosteado
            url.push(urlDeploy);
            url.push(urlGitHub);
            const sendData = {idUsuario: idUser, linkPublication: url, typePublication: typeProject, message: description,tecnologias: technologies.split(",") }
            const dataResponse = await projectService(sendData);

            console.log("technologies", technologies)
            // Envía una respuesta al cliente con éxito y la URL de la imagen cargada
            res.json({ success: true, url: dataResponse });
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

/* EDITAR---------------------- */
/* Funicon para actualziar informacion */
router.post('/profile/edit', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    try{
        if (req.session && req.session.user) {
            const dataPorfile = []
            const email = req.session.user;
            const name = req.body.nombre;
            const lastname = req.body.apellido;
            const genero =  req.body.gender;           
            const address = req.body.address;
            const phoneNumber = req.body.phone;
            console.log("antes de iamgen")
            const image = req.files.imageFile ;
            console.log(image)
            let fotoperfil = null;
            console.log("LLego antes de la iamgen")
            if (image) {
                fotoperfil = await uploadImage(image);
                dataPorfile.push({fotoperfil: fotoperfil[0]}) ;
            }
            dataPorfile.push({rol: req.body.roles});
            dataPorfile.push({tecnologias: req.body.tecnologies});
            const dateBirth = req.body.date;
            console.log("data que vo ya mandar",
                {
                    email: email,
                    name: name,
                    lastname: lastname,
                    genero: genero,
                    address: address,
                    phoneNumber: phoneNumber,
                    dateBirth:  dateBirth,
                    linkFotoPerfil: dataPorfile
                }
            )
            const dataUpdated = await putUserData(
                {
                    email: email,
                    name: name,
                    lastname: lastname,
                    genero: genero,
                    address: address,
                    phoneNumber: phoneNumber,
                    dateBirth:  dateBirth,
                    linkFotoPerfil: dataPorfile
                }
            );
            
            res.status(200).json({success: true, data: dataUpdated})
        }
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    }
});






export default router; 