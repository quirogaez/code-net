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

    /* Se hace el objeto para enviar a la peticion */
   const loginData = { email: emailInput, password: passwordInput };
 
    const response =  await fetch(window.location.search + "/codenet/login", {
            method: 'POST',
            body: JSON.stringify({loginData: loginData}),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
    const responseData =  await response.json()
            if (responseData.redirected) {
                Swal.fire({
                    imageUrl: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/static%2Ffavicon.svg?alt=media&token=5e8d39b3-3caf-4aa1-b672-d3dd48fcdda5&_gl=1*p55fvn*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTQ3ODAxNC4zNS4wLjE2OTk0NzgwMTQuNjAuMC4w",
                    imageWidth: 400,
                    imageHeight: 200,
                    title: "Bienvenido A Code|Net",
                    timer: 5000,
                    onOpen: function() {
                        Swal.showLoading()
                    }
                }).then(function(result) {
                    // Si la respuesta es una redirección, navega a la nueva URL
                    window.location.href = responseData.redirected;
                })
            }  else if(responseData.error) {
                Swal.fire({
                    title: responseData.error,
                    icon: "warning",
                    iconColor: "#801bea",
                    confirmButtonText: "Reintentar",
                    confirmButtonColor: "#801bea",
                })
            }


    /* let respose = await res.json();
    console.log(respose) */
})


function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}
