const projectMedia = document.getElementById('fileInput');

const filePreviewContainer = document.getElementById('filePreviewContainer');
const filePreview = document.getElementById('filePreview');

// Selecciona el botón de publicación de la publicación
const buttonPost = document.querySelector(".publish-button");
// Objeto para almacenar las imágenes seleccionadas
const fileToPost = {};

const form = document.querySelector('form');
form.addEventListener('submit', async function(event) {
    const commentValues = document.querySelector('.description-section').value;
    event.preventDefault();
    console.log(commentValues.length)
    console.log(Object.keys(fileToPost).length)
    if (Object.keys(fileToPost).length === 0 || commentValues.length < 10) {
        alert('Por favor, complete todos los campos del formulario. (La descripción debe ser mayor a diez caracteres)');
        
    } else {
        /* Aqui se activa el modal */
    }

});

projectMedia.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            filePreview.src = e.target.result;
            filePreviewContainer.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        filePreview.src = '#';
        filePreviewContainer.style.display = 'none';
    }
});


// Escucha los cambios en los elementos de entrada de imágenes
    projectMedia.addEventListener('change', function (e)  {
        console.log(e.target.files[0]);
        const fileContainer = e.target;
        const file = e.target.files[0];
        if (file) {
            // Obtiene una referencia al elemento que disparó el evento `change`
            const inputElement = e.target.id;
            
            // Verifica si ya hay una imagen asociada a ese elemento y elimínala
            if (fileToPost[inputElement]) {
                delete fileToPost[inputElement];
            }
            // Asigna la nueva imagen al objeto imagesToPost con el contexto actual
            fileToPost[inputElement] = file;        }
        /* imageCreate(file, fileContainer); */
    });
