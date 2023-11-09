
/* const GOOGLE_MAPS_API_KEY = 'TU_API_KEY'; */

//inicia el cambio de foto de perfil
const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("image-preview");
const imagesToUploadTech = {technologiesProfile: []}

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

const tecnologySelect = document.getElementById("tecnologys");
        const tecnologyImagesContainer = document.getElementById("tecnology-images");
        const sureModal = document.getElementById("sure");
        const closeModalButton = document.getElementById("closeModalSure");

        tecnologyImagesContainer.style.display = "flex";

        tecnologySelect.addEventListener("change", function () {
            if (tecnologyImagesContainer.children.length >= 8) {
                openSure();
               breack;
            } 

    /*funcion para mostrar el modal */
    function openSure(){
       
        const sure = document.querySelector('.sure');
        
  
            sure.classList.add('sure--show');
            const closeSure = document.querySelector('.close__modalSure'); 
            closeSure.addEventListener('click', (e) => {
                e.preventDefault();
                sure.classList.remove('sure--show');
            }); 

        };  
    const selectedTecnology = tecnologySelect.value.toLowerCase();

    if (imageSources[selectedTecnology]) {
        const newImage = document.createElement("img");
        newImage.src = imageSources[selectedTecnology];
        imagesToUploadTech.technologiesProfile.push({[selectedTecnology]: imageSources[selectedTecnology]});
        newImage.alt = "Tecnologia";
        newImage.style.maxWidth = "3.8rem";
        newImage.style.maxHeight = "3.8rem";
        newImage.style.margin = "2px";
        const container = document.createElement("div");
        container.appendChild(newImage);
        tecnologyImagesContainer.appendChild(container);
        tecnologySelect.options[tecnologySelect.selectedIndex].disabled = true;
        console.log(imagesToUploadTech);
    }
});

const imageSources = {
    bootstrap: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2FBoostrap.svg?alt=media&token=98cc90b4-5ae7-4e0b-a21c-79e75f1f64fa&_gl=1*181l8g*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTQ5ODcwNS4zNy4xLjE2OTk0OTg3MDcuNTguMC4w",
    js: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fjavascript.svg?alt=media&token=24735da3-03d5-4589-81a5-e76f18440f6b&_gl=1*yi1vu3*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYzOTcuMjUuMC4w",
    css: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fcss.svg?alt=media&token=c521b903-a631-4de8-b1f5-baf77b9bf13e&_gl=1*1qsxlsj*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYyNTkuMTQuMC4wg",
    html: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fhtml.svg?alt=media&token=b9cc2e45-8ce8-411b-83a5-f7804e04d1f1&_gl=1*4tvk3g*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTQyNTkzNi4zMy4xLjE2OTk0MjU5NDMuNTMuMC4w",
    react: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Freact.svg?alt=media&token=348d75f5-3165-4f67-b747-787cc2571cc0&_gl=1*not4r2*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1NDcuNS4wLjA.",
    node: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fnodejs.svg?alt=media&token=db6dacae-3aed-4622-85e4-ac9093319c5d&_gl=1*35rsrt*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0ODEuMTEuMC4w",
    vue:"https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fvuejs.svg?alt=media&token=002e05da-5625-4bdf-9592-abfaf3317558&_gl=1*16pev87*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1OTYuMjMuMC4w",
    aws: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Faws.svg?alt=media&token=5f0862fb-5fc6-47fd-9cd1-7160b71f1bad&_gl=1*rdrij2*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYyMjkuNDQuMC4w",
    mongodb: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fmongodb.svg?alt=media&token=23161cf2-59f5-465f-b0fc-69a8afcf624f&_gl=1*13dmtpb*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0MzIuNjAuMC4w",
    oracle: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Foracle.svg?alt=media&token=ec25bf78-8df4-477b-8c91-74d1a074fec1&_gl=1*rtso9w*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1MDguNDQuMC4w",
    cloudflare: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fcloudflare.svg?alt=media&token=8f7e3da6-c16e-49c9-a40c-f96eed814129&_gl=1*1webvbj*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYyNDMuMzAuMC4w",
    filetype: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Ffiletype.svg?alt=media&token=8353c388-e0d7-49c6-947f-ecd763a00413&_gl=1*1l61cud*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYyODYuNjAuMC4w",
    firebase: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Ffirebase.svg?alt=media&token=a302f3d7-3d87-4659-849d-d0db638057b5&_gl=1*9zotk6*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYzMDIuNDQuMC4w",
    gitHub: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fgithub.svg?alt=media&token=1ed47073-27dc-4137-b6f3-23043a60dcc0&_gl=1*ljt8or*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYzMjIuMjQuMC4w",
    inertia: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Finertia.svg?alt=media&token=b7a13cc6-2aa7-42b0-9616-c29b5cfe1410&_gl=1*1ew6ppv*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYzNjIuNjAuMC4w",
    java: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fjava.svg?alt=media&token=b590ce7b-4383-4822-9dfc-342809209e1e&_gl=1*1mx4toh*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYzNzguNDQuMC4w",
    jquery: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fjquery.svg?alt=media&token=b9daac5f-f88b-4453-9257-f3dfbac77828&_gl=1*1giqv9b*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0MDkuMTMuMC4w",
    maps: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fmaps.svg?alt=media&token=fecb06ba-8e41-40c9-ab8a-3adbd64a803a&_gl=1*rx73er*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0MjEuMS4wLjA.",
    mysql: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fmysql.svg?alt=media&token=b1d2603d-818b-4b9d-83fb-e6f05cbc9a8c&_gl=1*fjgraf*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0NDcuNDUuMC4w",
    nginx: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fnginx.svg?alt=media&token=e29d0eb1-5cae-4450-8c0f-92bdbb6136d9&_gl=1*14u1h8r*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0NzIuMjAuMC4w",
    nuxt: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fnuxt.js.svg?alt=media&token=15cb3c05-335c-4c60-8b98-2ddad95216f5&_gl=1*n09cra*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY0OTIuNjAuMC4w",
    php: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fphp.svg?alt=media&token=b6167375-bd2a-4007-8bfa-6732a52e670b&_gl=1*67m5so*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1MjQuMjguMC4w",
    rails: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Frails.svg?alt=media&token=d7128a56-9b75-485c-abd3-b27cbe9ba002&_gl=1*1mgnk34*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1MzUuMTcuMC4w",
    ruby: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fruby.svg?alt=media&token=c65f9247-7f32-4823-b41e-5ec8822182cf&_gl=1*15whmcl*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1NTkuNjAuMC4w",
    underscore: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Funderscore.js.svg?alt=media&token=d8edd8d2-fad1-48f1-aeb9-5a8f0177275f&_gl=1*1jec16z*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjY1NzYuNDMuMC4w",
    wordPress:"https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2FWordpress.svg?alt=media&token=0a2df88a-09c3-4af1-9c9e-f75d966271e5&_gl=1*1j52s7t*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTA2NTg1Mi4yMi4xLjE2OTkwNjYyMTMuNjAuMC4w",
    netlify: "https://firebasestorage.googleapis.com/v0/b/code-net-7a600.appspot.com/o/tecnologias%2Fnetlify.svg?alt=media&token=7a8cbb4c-bc9e-4545-945a-3d2315756ad3&_gl=1*3wjc0t*_ga*MTkzMjc3ODczMC4xNjk4MTE1OTM1*_ga_CW55HF8NVT*MTY5OTQwNDI3NC4zMS4xLjE2OTk0MDQyODYuNDguMC4w"
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
document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch(window.location.search + "/codenet/profile/data", {
        method: 'GET'
    })
    const responseData = await response.json()
    console.log("responseperfil", responseData.data.dateBirth)
    document.getElementById("name").value = responseData.data.name;
    document.getElementById("lastName").value = responseData.data.lastname;
    document.getElementById("rol").value  = responseData.data.linkFotoPerfil[1].rol;
    document.getElementById("date").value = new Date(responseData.data.dateBirth).toISOString().split('T')[0];
    document.getElementById("gender").value = responseData.data.genero;
    document.getElementById("addres").value = responseData.data.address;
    document.getElementById("correo").value = responseData.data.email;
    document.getElementById("phone").value = responseData.data.phoneNumber;
    document.querySelector(".profilePhoto").src =responseData.data.linkFotoPerfil[0].fotoperfil ;




    const saveButton = document.getElementById("save-button");
    const fileInput = document.getElementById("file-input");

    saveButton.addEventListener("click", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("name").value;
        const apellido = document.getElementById("lastName").value;
        const roles = document.getElementById("rol").value;
        const date = document.getElementById("date").value;
        const gender = document.getElementById("gender").value;
        const address = document.getElementById("addres").value;
        const profilePhoto = document.querySelector(".profilePhoto");
        const phone = document.getElementById("phone").value;
        const tecnologies = imagesToUploadTech;
        let projectMedia;
        let projectMediaFiles;

            projectMedia = document.getElementById('file-input');
            projectMediaFiles = projectMedia.files[0];
            console.log("imagen de project", projectMediaFiles.name)


        /* Datos para subir en el body y actualizar */
        const formData = new FormData();
        if (projectMediaFiles) {
            console.log("APPENDFILE")
            formData.append('imageFile', projectMediaFiles);
        }
        formData.append('nombre', nombre);
        formData.append('apellido', apellido);
        formData.append('gender', gender);
        formData.append('roles', roles);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('tecnologies', JSON.stringify(tecnologies));
        formData.append('date', date);


        Swal.fire({
            title: "¿Está seguro que quiere actualizar?",
            icon: "warning",
            iconColor: "#801bea",
            confirmButtonText: "Confirmar",
            confirmButtonColor: "#801bea",
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const response =  await fetch(window.location.search + "/codenet/profile/edit", {
                    method: 'POST',
                    body: formData,
                })
                const responseData = response;
                console.log("nueva data", responseData)
            }
        })

        
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




