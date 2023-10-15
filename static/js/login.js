function login() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserLogin = Users.find(user => user.email === email &&  user.password === password)
   

    if (isUserLogin) {
        console.log(" j holi");
        alert('inicio exitoso');
        window.location.href = "structure.html";
    }else {
        console.log(" no holi");
        alert('Su usuario o contraseña son incorrectos');
    }
}