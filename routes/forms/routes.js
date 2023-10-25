import express, {Router} from 'express'
import path from 'path'
import {searchDir} from '../searchDir.js'

const router = Router()

/* Borrar si se usa EJS */


router.get('/project', (req, res) => {
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'form_project.html');
    res.sendFile(filePath);
});

router.get('/post', (req, res) => {
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'postForm.html');
    res.sendFile(filePath);
});

router.get('/shortclip', (req, res) => {
    const __dirnameAll = searchDir();
    const filePath = path.join(__dirnameAll, 'static', 'templates', 'shortClip.html');
    res.sendFile(filePath);
});

export default router; 