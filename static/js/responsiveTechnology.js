const tecnologySelect = document.getElementById("tecnologys"); //contenedor de la barra
const tecnologyImagesContainer = document.getElementById("tecnology-images");

tecnologyImagesContainer.style.display = "flex"; //contenedor de las imagenes
tecnologySelect.addEventListener("change", function () {
    if (tecnologyImagesContainer.children.length >= 8) {
    breack;
    }
});