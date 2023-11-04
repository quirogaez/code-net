/* 
   Este script se encarga de adaptar las imágenes en los formularios del proyecto.
   Recopila las imágenes seleccionadas por el usuario y las prepara para ser subidas al servidor.
*/

// Selecciona el botón de publicación del proyecto
const buttonPost = document.querySelector(".button_post");

// Objeto para almacenar las imágenes seleccionadas
const imagesToPost = {};

// Selecciona todos los elementos de entrada de imágenes en el formulario
const projectMedia = document.querySelectorAll('.input_img');
console.log(projectMedia)


document.addEventListener('DOMContentLoaded', function () {
    const selectTecnologias = document.querySelector('select[name="tecnologias"]');
    const tecnologiaImages = document.querySelectorAll('.img__tecnology');
    const openModal = document.querySelector ('.button_post');
    const selectedImages = new Set(); 


    selectTecnologias.addEventListener('change', (event) => {
        const selectedOption = selectTecnologias.value;
        const selectedImage = document.getElementById(selectedOption);

        if (selectedImage) {
            selectedImage.style.display = 'block';
            selectedImages.add(selectedImage);
        }
    });

    tecnologiaImages.forEach((img) => {
        const closeButtonDiv = document.createElement('div');
        closeButtonDiv.className = 'close-button-container';

        const closeButtonSpan = document.createElement('span');
        closeButtonSpan.textContent = 'X';
        closeButtonSpan.className = 'close-button'; 

        closeButtonDiv.appendChild(closeButtonSpan);
        img.appendChild(closeButtonDiv);

        closeButtonSpan.addEventListener('click', () => {
            img.style.display = 'none';
            selectedImages.delete(img);
        });
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const urlProjectValue = document.querySelector('.url__project').value.trim();
        const urlGithubValue = document.querySelector('[name="url__github"]').value.trim();
        if (Object.keys(imagesToPost).length === 0 || selectTecnologias.value === 'vacio' || urlProjectValue === '' || urlGithubValue === '') {
            alert('Por favor, complete todos los campos del formulario.');
        } else {
            const sure = document.querySelector('.sure');
            const closeSure = document.querySelector('.close__modalSure');
            const discardPublication = document.querySelector('.discard');
            
            openModal.addEventListener('click', async (e)=>{
                e.preventDefault();
                sure.classList.add('sure--show');
                await modalSuccesPromise()
                .then(async () => {
                    console.log()
                    // Crea un objeto FormData para enviar las imágenes al servidor
                    const formData = new FormData();
                    for (const inputName in imagesToPost) {
                        formData.append('imageFile', imagesToPost[inputName]);
                    }
        
                    /* uploadImage(imagesToPost); */
        
                    // Realiza una solicitud Fetch POST al servidor para subir las imágenes
                    let url = await fetch(window.location.search + '/codenet/project', {
                        method: 'POST',
                        body: formData
                    })
                   
                    console.log(await url.json())
                })
            });
            closeSure.addEventListener('click', (e)=>{
                e.preventDefault();
                sure.classList.remove('sure--show');
            });
            discardPublication.addEventListener('click', (e) => {
                e.preventDefault();
                location.href = window.location.search + "/codenet/project"
            })

            
        }
    });
});

// Escucha los cambios en los elementos de entrada de imágenes
projectMedia.forEach((image) => {
    image.addEventListener('change', function (e)  {
        console.log(e.target.files[0]);
        const fileContainer = e.target;
        const file = e.target.files[0];
        if (file) {
            // Obtiene una referencia al elemento que disparó el evento `change`
            const inputElement = e.target.id;
            
            // Verifica si ya hay una imagen asociada a ese elemento y elimínala
            if (imagesToPost[inputElement]) {
                delete imagesToPost[inputElement];
                /* console.log(`Imagen en ${inputElement} eliminada.`); */
            }
            
            // Asigna la nueva imagen al objeto imagesToPost con el contexto actual
            imagesToPost[inputElement] = file;
            /* console.log(`Imagen en ${inputElement} actualizada.`); */
        }
        imageCreate(file, fileContainer);
    });
});

//*  */

// Función para mostrar el nombre de la imagen seleccionada
function imageCreate(imgData, fileContainer) {
    const imgText = fileContainer.nextElementSibling;
    console.log(imgText)
    const spanImage = document.createElement("span");
    imgText.textContent = " ";
    spanImage.className = "filedata";
    spanImage.style.display = 'block';
    spanImage.innerHTML = imgData.name;
    imgText.appendChild(spanImage);
}



function modalSuccesPromise (){
    return new Promise((resolve, reject) => {
        const openSuccessModal = document.querySelector ('.acceptButton');
        const modal = document.querySelector('.modal');

        openSuccessModal.addEventListener('click', (e)=>{
            e.preventDefault();
            modal.classList.add('modal--show');
            resolve();
        });
    })
}