/* import { Auth } from "./Auth.js"; */
let response;
let movies;

/* document.addEventListener("DOMContentLoaded", async (e) => {
    const auth = new Auth();
})
 */
/* let elementIcon = document.querySelectorAll(".icon1"); */
let companyIcon = document.getElementById("icon-company");


function resizeController (){ 
    // Verifica si se cumple una condición de responsividad
    if (window.innerWidth <= 850){
        /* elementIcon.forEach((element) => {
            element.classList.remove("fa-2xl");
            element.classList.add("fa-lg");
        }) */
        /* Cambiar imagen */
        companyIcon.src = "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/static%2Fcode.svg?alt=media&token=0d08591d-c180-408b-b81c-8d7a97a58b6e&_gl=1*16phkau*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTM0NDUyOC4yOC4xLjE2OTkzNDQ1NzEuMTcuMC4w"
    }
    else if (window.innerWidth <= 1025) { //si el ancho de la ventana es menor a 768 píxeles
        // Agrega la clase al elementIcon
       /*  elementIcon.forEach((element) => {
            element.classList.remove("fa-lg");
            element.classList.add("fa-2xl");
        }) */
        /* Cambiar imagen */
        companyIcon.src = "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/static%2Ffavicon.svg?alt=media&token=5e8d39b3-3caf-4aa1-b672-d3dd48fcdda5&_gl=1*ikbwgp*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTM0NDUyOC4yOC4xLjE2OTkzNDQ5NzkuNTUuMC4w" 

    } else {
        // Si la condición no se cumple,  eliminar la clase si es necesario
        /* elementIcon.forEach((element) => {
            element.classList.remove("fa-2xl");
            companyIcon.src = "../img/code.svg"
        }) */
        companyIcon.src = "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/static%2Fcode.svg?alt=media&token=0d08591d-c180-408b-b81c-8d7a97a58b6e&_gl=1*16phkau*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTM0NDUyOC4yOC4xLjE2OTkzNDQ1NzEuMTcuMC4w"
    }
}


// Agrega un evento de escucha para el evento 'resize'
window.addEventListener('resize', resizeController);

resizeController();





