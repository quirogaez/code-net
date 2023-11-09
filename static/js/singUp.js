// Inicializamos una variable que recibirá los datos del formulario de registro
const signupForm = document.querySelector('#signUpForm')

// Inicializamos una función que nos permitirá envíar los datos del formulario
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = document.querySelector('#name').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const date = document.querySelector('#date').value.trim();
    const genero = document.querySelector('#genero').value.trim();
    const username = document.querySelector('#username').value.trim();
    const inputPassword = document.querySelector('#password').value.trim();
    const confirmPassword = document.querySelector('#confirm_password').value.trim();

    if (inputPassword !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        inputPassword = "";
        confirmPassword = "";
        return;
    } else {
       

        // Aquí especificamos que nos agregue los datos a la lista
        const userData = {email: email, nickname: username , name: name, lastname: lastName,  dateBirth: date, genero: genero};
        console.log(userData)
        const loginData = {email: email, password: inputPassword };
       /*  password: inputPassword */

        // Aquí especificamos de que si el registro fue correcto, entonces nos aparecerá un msj de alerta de que fue exitoso
       
        const response = await fetch(window.location.search + "/codenet/signup", {
            method: "POST",
            body: JSON.stringify({userData: userData, loginData: loginData}),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        const responseData = await response.json();
        console.log(responseData)
        if (responseData?.error) {
            Swal.fire({
                title: responseData.error,
                icon: "warning",
                iconColor: "#801bea",
                confirmButtonText: "Reintentar",
                confirmButtonColor: "#801bea",
            })
        } else if (responseData.success) {
            Swal.fire({
                title: "Usuario creado con exito",
                text: `Su correo de acceso es: ${responseData.emailAccess}`,
                icon: "success",
                iconColor: "#801bea",
                confirmButtonText: "Iniciar Sesión",
                confirmButtonColor: "#801bea",
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    window.location.href = window.location.search + "/codenet/login"
                }
            })
        }
        
        console.log(responseData)
        // Si el registro fue exitoso, nos redigirá al login
        window.location.href /* = 'http://localhost:8080/codenet/structure' */
        
    }
})


/* Esta parte se debe quitar o comentar cuando se implemente la base de datos */
/* addEventListener("DOMContentLoaded", (e) => {
    const auth = window.localStorage.getItem("auth", 1);
    if (auth) {
        window.location.replace("./structure.html")
    }
})
 */

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

function togglePasswordVisibility1() {
    const passwordConfirm = document.getElementById('confirm_password');
    const eyeIcon1 = document.getElementById('eyeIcon1');

    if (passwordConfirm.type === 'confirm_password') {
        passwordConfirm.type = 'text';
        eyeIcon1.classList.remove('fa-eye');
        eyeIcon1.classList.add('fa-eye-slash');
    } else {
        passwordConfirm.type = 'confirm_password';
        eyeIcon1.classList.remove('fa-eye-slash');
        eyeIcon1.classList.add('fa-eye');
    }
}

