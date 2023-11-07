// Inicializamos una variable que recibirá los datos del formulario de registro
const signupForm = document.querySelector('#signUpForm')

// Inicializamos una función que nos permitirá envíar los datos del formulario
signupForm.addEventListener('submit', (e) => {
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
        // Inicializamos una variable que recibirá los datos de los usuarios registrados, si no hay datos almacenados, se creará un arreglo vacío
        const Users = JSON.parse(localStorage.getItem('users')) || []
        const isUserRegistered = Users.find(user => user.email === email, user=> user.username === username)

        // Si el email que desee registrar, ya existe, nos dirá que ya se encuentra registrado, sino me permitirá ingresar sin problema al sistema
        if (isUserRegistered) {
            return alert('El usuario ya esta registrado!')
        }

        // Aquí especificamos que nos agregue los datos a la lista
        Users.push({ name: name, lastName: lastName, email: email, date: date, genero: genero, username: username ,password: inputPassword })

        // Aquí especificamos que nos permita recibir los datos en formato String para podernos loguear
        localStorage.setItem('users', JSON.stringify(Users))

        // Aquí especificamos de que si el registro fue correcto, entonces nos aparecerá un msj de alerta de que fue exitoso
        alert('Registro Exitoso!')

        // Si el registro fue exitoso, nos redigirá al login
        window.location.href = 'http://localhost:8080/codenet/structure'
        
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

