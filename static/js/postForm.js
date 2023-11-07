const projectMedia = document.getElementById('fileInput');
const filePreviewContainer = document.getElementById('filePreviewContainer');
const filePreview = document.getElementById('filePreview');

// Selecciona el botón de publicación de la publicación
const buttonPost = document.querySelector(".publish-button");
// Objeto para almacenar las imágenes seleccionadas
const fileToPost = {};

const form = document.querySelector('form');
form.addEventListener('submit', async function(event) {
    event.preventDefault();

    
    if (Object.keys(buttonPost).length === 0) {
        alert('Por favor, complete todos los campos del formulario.');
        return
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