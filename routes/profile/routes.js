import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'

const router = Router()

/* Borrar si se usa EJS */
router.use(express.json());
const __dirnameAllStatic = searchDir();

router.use(express.static(path.join(__dirnameAllStatic, 'static')));


router.get('/profile', (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    console.log(searchDir())
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'visualitation.html');
    res.sendFile(filePath);
});


router.get('/profile/edit', (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    console.log(searchDir())
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'Setting_Perfil.html');
    res.status(200).sendFile(filePath);
});


export default router; 