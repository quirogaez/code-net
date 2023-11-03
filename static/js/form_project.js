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

// Escucha el clic en el botón de publicación
buttonPost.addEventListener('click', e => {
    e.preventDefault();
    
    alert("¿Está seguro de que quiere subir el proyecto con " +  Object.keys(imagesToPost).length + " imágenes?");
    
    // Crea un objeto FormData para enviar las imágenes al servidor
    const formData = new FormData();
    for (const inputName in imagesToPost) {
        formData.append('imageFile', imagesToPost[inputName]);
    }

    /* uploadImage(imagesToPost); */

    // Realiza una solicitud Fetch POST al servidor para subir las imágenes
    fetch('http://localhost:8080/codenet/project', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            console.log('Imágenes subidas con éxito');
        } else {
            console.error('Error al subir las imágenes');
        }
    })
    .catch(error => {
        console.error('Error al subir las imágenes', error);
    });
}); 

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

