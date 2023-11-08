import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import auth from '../../middlewares/Auth.js'

const router = Router()

/* Borrar si se usa EJS */
router.use(express.json());
const __dirnameAllStatic = searchDir();

router.use(express.static(path.join(__dirnameAllStatic, 'static')));


router.get('/friends', auth, (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'friend.html');
    res.sendFile(filePath);
});

export default router;