import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import auth from '../../middlewares/Auth.js'
import {signUpService, signInService, createSignIn} from '../../services/auth/authService.js'

const router = Router()

/* Borrar si se usa EJS */

router.use(express.json()); // Middleware para analizar datos JSON en las solicitudes

router.get('/', (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'index.html');
    res.status(200).sendFile(filePath);
});

router.get('/login', (req, res) => {
    const __dirnameAll = searchDir();
    console.log("dirnameall: " + __dirnameAll)
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'logIn.html');
    console.log("silepath: " + filePath)
    res.sendFile(filePath);
});


router.get('/signup', (req, res) => {
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'singUp.html');
    res.status(200).sendFile(filePath);
});



router.post('/login', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    console.log("sirve loginf")
    const {loginData} = req.body;
    const loginBdd = await signInService(loginData);
    /* OJO aqui se debe ahcer la validacion con la base de datos */
    if (loginBdd) {
        if (loginBdd.email === loginData.email && loginBdd.password === loginData.password){
            /* Se dejara la sesion con el id de la persona */
            req.session.user = loginBdd.email;
            res.status(303).json({redirected: '/codenet/structure'});
        } else if (loginBdd.password === loginData.password) {
            return res.status(400).json({error: "Contraseña incorrecta"})
        }
        
    } else 
    { 
        return res.status(400).json({error: "El correo no se encuentra registrado"})
    }
});

router.post('/signup', async (req, res) => {
    try { 
        res.header('Access-Control-Allow-Origin', '*');
        console.log("Signup Post")
        const {loginData, userData} = req.body;
        const logData = await signInService(loginData);
        console.log(logData);
            /* Validacion con la base de datos */
        if (logData) {
            return res.status(400).json({error: "Ya existe un usuario asignado al correo"})
        } else {
            const signUpData = await signUpService(
                {...userData, linkFotoPerfil:
                    [
                        {
                            fotoperfil: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/static%2Fprofile.jpg?alt=media&token=03f4f8c1-14d6-44cc-a347-78e471f0d577&_gl=1*1exrphq*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTQ3NDcxMy4zNC4xLjE2OTk0NzQ4NjMuNTcuMC4w"
                        }, 
                        {
                            rol: null
                        },
                        {
                            tecnologias: null
                        }
                    ]
                }
            );
            const signUpDataCreate = await createSignIn(loginData);
            /* Se dejara la sesion con el id de la persona */
            res.status(200).json({success: true, emailAccess: signUpDataCreate.email})
        }

    } catch(e) {
        res.status(500).json({ success: false, error: e.message });
    }
    
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect(303, '/codenet/structure');
});

export default router; 