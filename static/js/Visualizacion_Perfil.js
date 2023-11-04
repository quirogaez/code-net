document.addEventListener("DOMContentLoaded", function () {
    // Obtener los datos del Local Storage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
        const userData = JSON.parse(storedData);
        document.getElementById("nombre").textContent = userData.nombre;
        document.getElementById("roles").textContent = userData.roles;
        document.getElementById("tecnologia").textContent = userData.tecnologia;
        document.getElementById("date").textContent = userData.date;
        document.getElementById("gender").textContent = userData.gender;
        document.getElementById("address").textContent = userData.address;
        document.getElementById("correo").textContent = userData.correo;
        document.getElementById("phone").textContent = userData.phone;

        // Mostrar la imagen de perfil si está presente
        if (userData.profileImage) {
            const profileImage = document.getElementById("profileImage");
            profileImage.src = userData.profileImage;
        }
    }
});