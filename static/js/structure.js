import { Auth } from "./Auth.js";

document.addEventListener("DOMContentLoaded", (e) => {
    const auth = new Auth();
})

/* let elementIcon = document.querySelectorAll(".icon1"); */
let companyIcon = document.getElementById("icon-company");


function resizeController (){ 
    // Verifica si se cumple una condición de responsividad
    if (window.innerWidth <= 480){
        /* elementIcon.forEach((element) => {
            element.classList.remove("fa-2xl");
            element.classList.add("fa-lg");
        }) */
        /* Cambiar imagen */
        companyIcon.src = "../img/code.svg"
    }
    else if (window.innerWidth <= 1025) { //si el ancho de la ventana es menor a 768 píxeles
        // Agrega la clase al elementIcon
       /*  elementIcon.forEach((element) => {
            element.classList.remove("fa-lg");
            element.classList.add("fa-2xl");
        }) */
        /* Cambiar imagen */
        companyIcon.src = "../img/favicon/favicon.svg"

    } else {
        // Si la condición no se cumple,  eliminar la clase si es necesario
        /* elementIcon.forEach((element) => {
            element.classList.remove("fa-2xl");
            companyIcon.src = "../img/code.svg"
        }) */

    }
}


// Agrega un evento de escucha para el evento 'resize'
window.addEventListener('resize', resizeController);

resizeController();


// Realiza una solicitud Fetch POST al servidor para subir las imágenes
const response =  fetch('http://localhost:8080/codenet/streams', {
    method: 'GET'
})
.then(async response => {
    if (response.ok) {
        console.log(await response.json());
    } else {
        console.error('Error al subir las imágenes');
    }
})
.catch(error => {
    console.error('Error al subir las imágenes', error);
});


