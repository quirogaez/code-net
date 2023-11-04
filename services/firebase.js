// Importa las funciones necesarias del SDK de Firebase y otras dependencias
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv';
import crypto from 'node:crypto'

// Configuración de Firebase con la información de tu proyecto
dotenv.config()
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: "code-net-7a600",
    storageBucket: process.env.storageBucket,
    messagingSenderId: "264017678385",
    appId: "1:264017678385:web:9fd646fe04c9d19cab0510",
    measurementId: "G-NFVBWE9W87"
};

// Inicializa la aplicación de Firebase con la configuración
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Función para subir imágenes a Firebase Storage
const uploadImage = async (imagesToPost) => {
   /*  console.log(imagesToPost instanceof Array) */
    if (!(imagesToPost instanceof Array)) {
        imagesToPost = [imagesToPost];
    }
    let  arrayUrl = []
    for (let image in imagesToPost) {
        console.log(imagesToPost);
        let url = await uploadProcess(imagesToPost[image], image);
        arrayUrl.push(url);
    }
    console.log(arrayUrl);
    return arrayUrl
}

// Función para procesar la subida de una imagen
const uploadProcess = (file, filename) => {
    return new Promise((resolve, reject) => {
        filename =  crypto.randomUUID();
        const storageRef = ref(storage, 'images');
        const folderRef = ref(storageRef, filename);
        const uploadTask =  uploadBytesResumable(folderRef, Buffer.from( file.data, 'binary'), {contentType: file.mimetype});
        
        // Maneja los eventos de cambio de estado durante la subida
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, (error) => {
            reject(error);
        }, async () => {
            // Obtiene la URL de descarga de la imagen subida
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('URL', url);
            resolve(url);
        });
    });
}

// Exporta la función para subir imágenes
export default uploadImage;
