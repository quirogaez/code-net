import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'
import auth from '../../middlewares/Auth.js'
import { getPeople, getUserData, createFriend } from '../../services/friends/friendsService.js'
import {signInService} from '../../services/auth/authService.js'

const router = Router()

/* Borrar si se usa EJS */
router.use(express.json());
const __dirnameAllStatic = searchDir();

router.use(express.static(path.join(__dirnameAllStatic, 'static')));


router.get('/friend/:email', auth, (req, res) => {
     /* Ruta encargada de ir hacia el perfi lde un amigo */
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'friend.html');
    res.sendFile(filePath);
});

router.get('/friend/:email/data', auth, async (req, res) => {
    /* Ruta encargada de extraer la ifnromacion de  amigo / persona */
    try{
        if (req.session && req.session.user) {
            const {email} = req.params;
            console.log(email)
            const idFriend = await signInService({email: email})
            const dataUsers = await getUserData(email);
            console.log(dataUsers)
            res.status(200).json({success: true, data: dataUsers,  user: req.session.user, idFriend: idFriend.id})
        }
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    };
});


router.get('/friends/users', auth, async (req, res) => {
    /* Ruta encargada de extraer ususarios para mostrarlos en personas */
    try{
        if (req.session && req.session.user) {
            const dataUsers = await getPeople();
            console.log(dataUsers)
            res.status(200).json({success: true, data: dataUsers, user: req.session.user})
        }
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    };
});

router.post('/addfriend', async (req, res) => {
    /* Ruta que permite agregar amigos */
    res.header('Access-Control-Allow-Origin', '*');
    console.log("Entraste a añadir amigo")
    const {friendId, userId} = req.body;
    console.log(friendId)
    console.log(req.session.userid)
    /* OJO aqui se debe ahcer la validacion con la base de datos */

    try{
        if (req.session && req.session.user) {
            const dataFriends = {
                idAmigo: friendId,
                idUsuario: req.session.userid
            };
            const dataFriendship = await createFriend(dataFriends)
            res.status(200).json({success: true, data: dataFriendship})
        }
    } catch (e) {
        res.status(500).json({ success: false, error: e.message });
    };
});

router.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
export default router;