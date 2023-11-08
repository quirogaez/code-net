import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import auth from '../../middlewares/Auth.js'
import {signUpService, signInService} from '../../services/auth/authService.js'

const router = Router()

/* Borrar si se usa EJS */

router.use(express.json()); // Middleware para analizar datos JSON en las solicitudes

router.get('/login', (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    const __dirnameAll = searchDir();
    console.log("dirnameall: " + __dirnameAll)
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'logIn.html');
    console.log("silepath: " + filePath)
    res.sendFile(filePath);
});


router.get('/signup', (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'singUp.html');
    res.status(200).sendFile(filePath);
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect(303, '/codenet/structure');
});

router.post('/login', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    console.log("sirve loginf")
    const {username, password} = req.body;
    /* OJO aqui se debe ahcer la validacion con la base de datos */
    if (username && password) {
        /* Se dejara la sesion con el id de la persona */
        req.session.user = 2;
        res.redirect(303, '/codenet/structure');
    } else 
    { 
        res.header("si");
    }
});

router.post('/signup', async (req, res) => {
    try { 
        res.header('Access-Control-Allow-Origin', '*');
        console.log("Signup Post")
        const {loginData, userData} = req.body;
        const logData = await signUpService(loginData);
        const signUpData = await signInService(userData);
    /* OJO aqui se debe ahcer la validacion con la base de datos */
        /* Se dejara la sesion con el id de la persona */
        req.session.user = userData.id;
        res.status(200).json({data: signUpData})
    } catch(e) {

    }
    
});


router.get('/', (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'index.html');
    res.status(200).sendFile(filePath);
});



export default router; 