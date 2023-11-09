document.addEventListener('DOMContentLoaded', function () {
    const videoUploadForm = document.getElementById('videoUploadForm');
    const videoDescription = document.getElementById('videoDescription');
    const videoURL = document.getElementById('videoURL');
    const submitButton = document.getElementById('submitButton');

    videoUploadForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const description = videoDescription.value.trim();
        const url = videoURL.value.trim();

        if (!description || !url) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Supongamos que 'videos' es la clave para almacenar en LocalStorage
        const videos = JSON.parse(localStorage.getItem('videos')) || [];
        videos.push({ description, url });

        localStorage.setItem('videos', JSON.stringify(videos));

        alert('Video subido correctamente.');
        videoUploadForm.reset(); // Restablecer el formulario
    });
});


