document.addEventListener("DOMContentLoaded", async function () {
    // Obtener los datos del Local Storage
    const response = await fetch(window.location.search + "/codenet/profile/data", {
        method: 'GET'
    })
    const responseData = await response.json()
    document.getElementById("nombre").textContent = responseData.data.name;
    document.getElementById("nombre").textContent += responseData.data.lastname;
    document.getElementById("roles").textContent  = responseData.data.linkFotoPerfil[1].rol;
    document.getElementById("date").textContent = new Date(responseData.data.dateBirth).toISOString().split('T')[0];
    document.getElementById("gender").textContent = responseData.data.genero;
    document.getElementById("address").textContent = responseData.data.address;
    document.getElementById("correo").textContent = responseData.data.email;
    document.getElementById("phone").textContent = responseData.data.phoneNumber;
    document.getElementById("profileImage").src = responseData.data.linkFotoPerfil[0].fotoperfil ;
    const dataTechnologies = JSON.parse(responseData.data.linkFotoPerfil[2].tecnologias);

    const technologiesContainer = document.querySelector(".tecnologies-mostrar");
    if(dataTechnologies.technologiesProfile) {
        for (let tech of dataTechnologies.technologiesProfile) {
            technologiesContainer.innerHTML += `
            <img class="technology" id="tecnologia" src="${Object.values(tech)[0]}">
            `;
            console.log(Object.values(tech)[0])
            console.log(tech)
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
