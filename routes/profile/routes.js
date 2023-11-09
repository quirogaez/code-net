import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import auth from '../../middlewares/Auth.js'
import {profileImg, getAllUserInfo} from '../../services/profile/profile.js'

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

router.post('/profile/edit', async (req, res) => {
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

export default router; 