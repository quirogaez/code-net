document.addEventListener('DOMContentLoaded', function () {
    const videoDescriptionInput = document.getElementById('videoDescription');
    const videoURLInput = document.getElementById('videoURL');
    const videoFileInput = document.getElementById('img_button');
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir envío del formulario

        const description = videoDescriptionInput.value;
        const url = videoURLInput.value;
        const videoFile = videoFileInput.files[0];

        if (description && url && videoFile) {
  
            document.getElementById('videoModal').style.display = 'block';
        } else {
            // Informar al usuario que todos los campos son obligatorios
            alert('Por favor, complete todos los campos y seleccione un archivo de video.');
        }
    });

    // Cierra el modal y redirige al hacer clic en el botón "Cerrar"
    document.getElementById('closeModal').addEventListener('click', function () {
        // Redirige a una página HTML (reemplaza 'tu_pagina.html' con la URL deseada)
        window.location.href = '../templates/structure.html';
    });
});