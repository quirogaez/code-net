import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'

const router = Router()

/* Borrar si se usa EJS */


router.get('/structure', (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    console.log(searchDir())
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'structure.html');
    res.sendFile(filePath);
});

router.get('/search', (req, res) => {
    /* Con ejs */
    //res.render('logIn',);
    /* Sin EJS */
    console.log(searchDir())
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'searchproject.html');
    res.sendFile(filePath);
});

export default router; 