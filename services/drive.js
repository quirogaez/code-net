// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import crypto from 'node:crypto';

const firebaseConfig = {
    apiKey: "AIzaSyAhdPsO1vSuZyTS2AGZ19DEljSzQoX0pAM",
    authDomain: "code-net-7a600.firebaseapp.com",
    databaseURL: "https://code-net-7a600-default-rtdb.firebaseio.com",
    projectId: "code-net-7a600",
    storageBucket: "code-net-7a600.appspot.com",
    messagingSenderId: "264017678385",
    appId: "1:264017678385:web:9fd646fe04c9d19cab0510",
    measurementId: "G-NFVBWE9W87"
};
const app = initializeApp(firebaseConfig); 
const storage = firebase.storage();


export const uploadImage = async (imagesToPost) => {
    for(let i = 0; i < imagesToPost; i++) {
        let url = await uploadProcess(
            imagesToPost[i],
            crypto.randomUUID()
            );
    }
}

export const uploadProcess = (file, filename) => {
    return new Promise((resolve, reject) => {
        const storageRef = storage.ref().child("images");
        const folderRef = storageRef.child(filename);
        const uploadTask = folderRef.put(file);
        let uploadedFileName
        uploadTask.on("state_changed", (snapshot) => {
            uploadedFileName = snapshot.ref.name;
        },(error) => {
            reject(error)
        }, () => {
            storage
            .ref("images")
            .child(uploadedFileName)
            .getDownloadURL()
            .then((url) => {
                console.log("URL", url);
                resolve(url)
            }) 
        })
    })
} 