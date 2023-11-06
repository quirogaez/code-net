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

const editarPerfilButton = document.getElementById("editarPerfilButton");

editarPerfilButton.addEventListener("click", function() {
    // Redirige a la página HTML deseada
    window.location.href = "../templates/Setting_Perfil.html";
});

const editPortadaButton = document.getElementById("edit-portada-button");
const portadaImage = document.getElementById("portada-image");
const fileInput = document.getElementById("file-input");

editPortadaButton.addEventListener("click", function() {
    fileInput.click(); // Al hacer clic en el ícono, se activa el input de archivo oculto
});

fileInput.addEventListener("change", function() {
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        portadaImage.src = objectURL; // Muestra la imagen seleccionada por el usuario
    }
});
