import express, {Router} from 'express';
import path from 'path';
import {searchDir} from '../searchDir.js';
import auth from '../../middlewares/Auth.js';
import {profileImg, getAllUserInfo, putUserData} from '../../services/profile/profile.js';
import fileUpload from 'express-fileupload';

const router = Router()


/* Borrar si se usa EJS */
router.use(express.json());
router.use(fileUpload());

const __dirnameAllStatic = searchDir();

router.use(express.static(path.join(__dirnameAllStatic, 'static')));


router.get('/profile', auth, (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'profile.html');
    res.sendFile(filePath);
});


router.get('/profile/edit', auth, (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'Edit_profile.html');
    res.status(200).sendFile(filePath);
});

router.get('/profile/img', async (req, res) => {
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

router.get('/profile/data', async (req, res) => {
    try{
        if (req.session && req.session.user) {
            const email = req.session.user;
            const dataUser = await getAllUserInfo(email);
            console.log(dataUser)
            res.status(200).json({success: true, data: dataUser})
        }
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    }
});

/* Funicon para actualziar informacion */
router.post('/profile/edit', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    try{
        if (req.session && req.session.user) {
            const dataPorfile = {}
            const email = req.session.user;
            const name = req.body.nombre;
            const lastname = req.body.apellido;
            const genero =  req.body.gender;           
            const address = req.body.address;
            const phoneNumber = req.body.phone;

            /* const image = req.files.imageFile || null; */
            const fotoperfil = null;
            console.log("LLego antes de la iamgen")
            /* if (image) {
                fotoperfil = await uploadImage(image);
                dataPorfile["fotoperfil"] = fotoperfil;
            } */
            dataPorfile["rol"] = req.body.roles;
            dataPorfile["tecnologies"] = req.body.tecnologies;
            const dateBirth = req.body.date;
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