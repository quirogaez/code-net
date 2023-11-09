import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import auth from '../../middlewares/Auth.js'
import { getFriends, getUserData } from '../../services/friends/friendsService.js'

const router = Router()

/* Borrar si se usa EJS */
router.use(express.json());
const __dirnameAllStatic = searchDir();

router.use(express.static(path.join(__dirnameAllStatic, 'static')));


router.get('/friend/:email', auth, (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'friend.html');
    res.sendFile(filePath);
});

router.get('/friend/:email/data', auth, async (req, res) => {
    try{
        if (req.session && req.session.user) {
            console.log("oal desde la peticion ")
            const {email} = req.params;
            console.log(email)
            const dataUsers = await getUserData(email);
            console.log(dataUsers)
            res.status(200).json({success: true, data: dataUsers})
        }
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    };
});


router.get('/friends/users', auth, async (req, res) => {
    try{
        if (req.session && req.session.user) {
            const dataUsers = await getFriends();
            console.log(dataUsers)
            res.status(200).json({success: true, data: dataUsers, user: req.session.user})
        }
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    };
});

export default router;