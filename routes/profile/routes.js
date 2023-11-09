import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import auth from '../../middlewares/Auth.js'
import {profileImg} from '../../services/profile/profile.js'

const router = Router()

/* Borrar si se usa EJS */
router.use(express.json());
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


export default router; 