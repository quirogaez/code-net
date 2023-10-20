addEventListener("DOMContentLoaded", (e) => {
    const auth = window.localStorage.getItem("auth", 1);
    if (auth) {
        window.location.replace("./structure")
    }
})


const submitButton = document.querySelector(".button--login").childNodes[1];
/* Esta funcion se debe cambiar cuando funcione base de datos */

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const users = JSON.parse(window.localStorage.getItem("users"));
    const registerForm = document.forms["loginForm"];
    const emailInput = registerForm.elements["email"].value;
    const passwordInput = registerForm.elements["password"].value;
    if(users) {
        for (let user of users) {
            if (user.email === emailInput && user.Password === passwordInput) {
                window.localStorage.setItem("auth", 1);

                window.location.replace("./structure")
            }
        }
    }
})