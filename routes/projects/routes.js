import express, {Router} from 'express';
import path from 'path';
import {searchDir} from '../searchDir.js';
import auth from '../../middlewares/Auth.js';
import {projectFindById, projectFindByType} from '../../services/projects/projectsService.js';


const router = Router()



router.use(express.json());

router.get('/projects/id', async (req, res) => {
    /* Solicitar imagen de perfil para el navbar */
    try{
        if (req.session && req.session.user) {
            const id =  req.session.userid
            const dataImg = await profileImg(email);
            console.log(dataImg)
            res.status(200).json({success: true, imgUrl: dataImg.linkFotoPerfil[0].fotoperfil})
        }
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    }
});

router.post('/projects/type', async (req, res) => {
    /* Solicitar imagen de perfil para el navbar */
    res.header('Access-Control-Allow-Origin', '*');
    try{
        if (req.session && req.session.user) {
            const {genero} =  req.body;
            console.log("Dentro de aquiiii ")
            const projects = await projectFindByType(genero);
            console.log(projects)
            res.status(200).json({success: true, data: projects})
        }
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    }
});

router.get('/profile/img', async (req, res) => {
    /* Solicitar imagen de perfil para el navbar */
    try{
        if (req.session && req.session.user) {
            const email = req.session.user;
            const dataImg = await profileImg(email);
            console.log(dataImg)
            res.status(200).json({success: true, imgUrl: dataImg.linkFotoPerfil[0].fotoperfil})
        }
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    }
});








export default router; 