
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
/* Tecnologias*/

const tecnologySelect = document.getElementById("tecnologys"); //contenedor de la barra
const tecnologyImagesContainer = document.getElementById("tecnology-images");

tecnologyImagesContainer.style.display = "flex"; //contenedor de las imagenes
tecnologySelect.addEventListener("change", function () {
    if (tecnologyImagesContainer.children.length >= 8) {
       /*  alert("Solo se permiten ocho tecnologías"); */
    
    openSure();
    breack;

    }

    //funcion para mostrar el modal
    function openSure(){
       
        const sure = document.querySelector('.sure');
        
      /*   openSure().addEventListener('click', (e) => { */
           /*  e.preventDefault(); */
            sure.classList.add('sure--show');
            const closeSure = document.querySelector('.close__modalSure'); 
            closeSure.addEventListener('click', (e) => {
                e.preventDefault();
                sure.classList.remove('sure--show');
            }); 

        };
         

    /*     return;
    } */
    
  
    
    const selectedTecnology = tecnologySelect.value;

    if (imageSources[selectedTecnology]) {
        const newImage = document.createElement("img");
        newImage.src = imageSources[selectedTecnology];
        newImage.alt = "Tecnologia";
        newImage.style.maxWidth = "3.8rem";
        newImage.style.maxHeight = "3.8rem";
        newImage.style.margin = "2px";
        const container = document.createElement("div");
        container.appendChild(newImage);
        tecnologyImagesContainer.appendChild(container);
        tecnologySelect.options[tecnologySelect.selectedIndex].disabled = true;
    }
});

const imageSources = {
    Boostrap: "../img/tecnologias/Boostrap.svg",
    JavaScript: "../img/tecnologias/javascript.svg",
    css: "../img/tecnologias/css.svg",
    html:"../img/tecnologias/html.svg",
    react: "../img/tecnologias/react.svg",
    nodejs: "../img/tecnologias/nodejs.svg",
    vuejs:"../img/tecnologias/vuejs.svg",
    aws: "../img/tecnologias/aws.svg",
    mongodb: "../img/tecnologias/mongodb.svg",
    oracle: "../img/tecnologias/oracle.svg",
    cloudflare: "../img/tecnologias/cloudflare.svg",
    filetype: "../img/tecnologias/filetype.svg",
    firebase: "../img/tecnologias/firebase.svg",
    github: "../img/tecnologias/github.svg",
    inertia: "../img/tecnologias/inertia.svg",
    java: "../img/tecnologias/java.svg",
    jquery: "../img/tecnologias/jquery.svg",
    maps: "../img/tecnologias/maps.svg",
    mysql: "../img/tecnologias/mysql.svg",
    nginx: "../img/tecnologias/nginx.svg",
    nuxt: "../img/tecnologias/nuxt.js.svg",
    php: "../img/tecnologias/php.svg",
    rails: "../img/tecnologias/rails.svg",
    ruby: "../img/tecnologias/ruby.svg",
    underscore: "../img/tecnologias/underscore.js.svg",
    Wordpress: "../img/tecnologias/Wordpress.svg"
};



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
        const roles = document.getElementById("rol").value;
        const date = document.getElementById("date").value;
        const gender = document.getElementById("gender").value;
        const address = document.getElementById("addres").value;
        const correo = document.getElementById("correo").value;
        const phone = document.getElementById("phone").value;

        const tecnologiesSelect = document.querySelectorAll("#tecnologys option:checked");
        const tecnologies = Array.from(tecnologiesSelect).map((option) => option.value);

        if (nombre && roles) {
            // Crear un objeto JSON con todos los datos del formulario
            const userData = {
                nombre: nombre,
                roles: roles,
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
            document.getElementById("rol").value = "";
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




