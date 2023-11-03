
/* const GOOGLE_MAPS_API_KEY = 'TU_API_KEY'; */

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
        Boostrap: "/static/img/tecnologias/1.svg",
        JavaScript: "/static/img/tecnologias/2.svg",
        css: "/static/img/tecnologias/4.svg"

    };

 
    if (imageSources[selectedTecnology]) {
        const newImage = document.createElement("img");
        newImage.src = imageSources[selectedTecnology];
        newImage.alt = "Tecnologia";
        newImage.style.maxWidth = "3.8rem";
        newImage.style.maxHeight = "3.8rem";
        newImage.style.margin = "2px";
       
       
        tecnologyImagesContainer.appendChild(newImage);
        tecnologySelect.options[tecnologySelect.selectedIndex].disabled = true; // Deshabilita la opción seleccionada
    }
    
});


/* tecnologySelect.dispatchEvent(new Event("change"));

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
}); */
document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("save-button");
    const fileInput = document.getElementById("file-input");

    saveButton.addEventListener("click", function () {
        const nombre = document.getElementById("name").value;
        const apellido = document.getElementById("name").value;
        /* const tecnologia = document.getElementById("tecnologys").value; */
        const date = document.getElementById("date").value;
        const gender = document.getElementById("gender").value;
        const address = document.getElementById("addres").value;
        const correo = document.getElementById("correo").value;
        const phone = document.getElementById("phone").value;

        const tecnologiesSelect = document.querySelectorAll("#tecnologys option:checked");
        const tecnologies= Array.from(tecnologiesSelect).map((option)=> option.value);

        if (nombre && apellido) {
            // Crear un objeto JSON con todos los datos del formulario
            const userData = {
                nombre: nombre,
                apellido: apellido,
                tecnologias: tecnologies,
                date: date,
                gender: gender,
                address: address,
                correo: correo,
                phone: phone,
                profileImage: getImageDataUrl()  // Obtiene la imagen en base64
            };

            // Almacenar el objeto JSON en el Local Storage
            localStorage.setItem("userData", JSON.stringify(userData));

            alert("Datos del formulario almacenados en Local Storage.");

            // Limpia los campos del formulario
            document.getElementById("name").value = "";
            document.getElementById("name").value = "";
            document.getElementById("tecnologys").value = "";
            document.getElementById("date").value = "";
            document.getElementById("gender").value = "";
            document.getElementById("addres").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("phone").value = "";
            clearImageInput();  // Limpia la vista previa de la imagen
        } else {
            alert("Por favor, complete todos los campos del formulario.");
        }
    });

    // Función para obtener la imagen en base64
    function getImageDataUrl() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const image = document.getElementById("image-preview");
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
        return canvas.toDataURL();
    }

    // Función para limpiar la vista previa de la imagen
    function clearImageInput() {
        const imagePreview = document.getElementById("image-preview");
        imagePreview.src = "/static/img/portadasinfoto.jpeg";
    }

    fileInput.addEventListener("change", function (event) {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const objectURL = URL.createObjectURL(selectedFile);
            imagePreview.src = objectURL;
        }
    });
});




