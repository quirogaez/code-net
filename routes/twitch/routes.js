import express, {Router} from 'express'
import fileUpload from 'express-fileupload';
import {getStreams, getUsers} from '../../services/twitch.js'

const router = Router()

/* Borrar si se usa EJS */

router.use(express.json());
router.use(fileUpload());

//Ruta para obtener streams
router.get('/streamsTwitch', async (req, res) => {
    const {pag, num} = req.query;
    try{
        const dataStreams = await getStreams({pag, num});
        /* console.log(dataStreams) */
        res.status(200).json({data: dataStreams});
    } catch (e) {
        res.status(500).send("Invalid request");
    }
});

//Ruta para obtener user
router.post('/usersTwitch', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const {users} = req.body;
    /* console.log(req.body);
    console.log(users); */
    try{
        const dataId = await getUsers(users);
        /* console.log(dataId) */
        res.status(200).json({data: dataId});
    } catch (e) {
        res.status(500).send("Invalid request");
    }
});

export default router;