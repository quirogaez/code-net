addEventListener("DOMContentLoaded", (e) => {
    /* const auth = window.localStorage.getItem("auth", 1);
    if (auth) {
        window.location.replace("./structure")
    } */
})

const submitButton = document.querySelector(".button--login").childNodes[1];
/* Esta funcion se debe cambiar cuando funcione base de datos */
console.log(submitButton)
submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const users = JSON.parse(window.localStorage.getItem("users"));
    const registerForm = document.forms["loginForm"];
    const emailInput = registerForm.elements["email"].value;
    const passwordInput = registerForm.elements["password"].value;
    if(users) {
        for (let user of users) {
            if (user.email === emailInput && user.password === passwordInput) {
                window.localStorage.setItem("auth", 1);
                console.log("true");
                
            }
        }
    }
   await fetch(window.location.search + "/codenet/login", {
        method: 'POST',
        body: JSON.stringify({ username: emailInput, password: passwordInput }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(response => {
        if (response.redirected) {
            // Si la respuesta es una redirección, navega a la nueva URL
            window.location.href = response.url;
        } else {
            return response.json();
        }
    })
    /* let respose = await res.json();
    console.log(respose) */
})
