
const GOOGLE_MAPS_API_KEY = 'TU_API_KEY';

//inicia el cambio de foto de perfil
const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("image-preview");

// Agregar un evento al hacer clic en la imagen
imagePreview.addEventListener("click", function () {
    // Simular un clic en el input de archivo
    fileInput.click();
});

// Agregar un evento para el cambio en el input de archivo
fileInput.addEventListener("change", function (event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
        const objectURL = URL.createObjectURL(selectedFile);
        imagePreview.src = objectURL;
    }
});

const tecnologySelect = document.getElementById("tecnologys");
const tecnologyImagesContainer = document.getElementById("tecnology-images");

tecnologyImagesContainer.style.display = "flex"; // Establece el contenedor como bloque


tecnologySelect.addEventListener("change", function () {
    const selectedTecnology = tecnologySelect.value;
    const imageSources = {
        figma: "/static/img/10.png",
        html: "/static/img/9.png",
        css: "/static/img/8.png"
    };

 
    if (imageSources[selectedTecnology]) {
        const newImage = document.createElement("img");
        newImage.src = imageSources[selectedTecnology];
        newImage.alt = "Tecnologia";
        newImage.style.maxWidth = "4rem";
        newImage.style.maxHeight = "4rem";
        newImage.style.margin = "2px";
       
       
        tecnologyImagesContainer.appendChild(newImage);
        tecnologySelect.options[tecnologySelect.selectedIndex].disabled = true; // Deshabilita la opción seleccionada
    }
    
});


tecnologySelect.dispatchEvent(new Event("change"));

function loadMap() {
    const initialCoordinates = { lat: 0, lng: 0 };
    const mapOptions = {
        center: initialCoordinates,
        zoom: 2,
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
document.addEventListener('DOMContentLoaded', function () {
    loadMap();
});

document.addEventListener('DOMContentLoaded', function () {
    // ... (mantén el contenido anterior) ...

    // Agregar evento al botón "Guardar"
    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', function () {
        // Recopilar datos del formulario
        const name = document.getElementById('name').value;
        const role = document.getElementById('role').value;
        // Agrega aquí la recopilación de los otros datos del formulario

        // Crear un objeto con los datos
        const userData = {
            name,
            role,
            // Agrega aquí los otros datos
        };

        // Almacenar el objeto en el almacenamiento local
        localStorage.setItem('userData', JSON.stringify(userData));
    });
});


