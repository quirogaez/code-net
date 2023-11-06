import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import auth from '../../middlewares/Auth.js'

const router = Router()

/* Borrar si se usa EJS */

router.use(express.json()); // Middleware para analizar datos JSON en las solicitudes

router.get('/login', (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    console.log(searchDir())
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'logIn.html');
    res.sendFile(filePath);
});


router.get('/signup', auth, (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    console.log(searchDir())
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'singUp.html');
    res.status(200).sendFile(filePath);
});

router.post('/login', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    console.log("sirve loginf")
    const {username, password} = req.body;
    /* OJO aqui se debe ahcer la validacion con la base de datos */
    if (username && password) {
        /* Se dejara la sesion con el id de la persona */
        req.session.user = 1;
        res.redirect(303, '/codenet/structure');
    } else 
    { 
        res.header("si");
    }
});


router.get('/', (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    console.log(searchDir())
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'index.html');
    res.status(200).sendFile(filePath);
});



export default router; 