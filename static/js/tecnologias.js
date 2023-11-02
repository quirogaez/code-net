document.addEventListener('DOMContentLoaded', function () {
    const selectTecnologias = document.querySelector('select[name="tecnologias"]');
    const tecnologiaImages = document.querySelectorAll('.img__tecnology');
    const selectedImages = new Set(); // Conjunto para almacenar las imágenes seleccionadas

    // Ocultar todas las imágenes al cargar la página
    tecnologiaImages.forEach((img) => {
        img.style.display = 'none';
    });

    selectTecnologias.addEventListener('change', (event) => {
        const selectedOption = selectTecnologias.value;
        const selectedImage = document.getElementById(selectedOption);

        if (selectedImage) {
            selectedImage.style.display = 'block';
            selectedImages.add(selectedImage); // Agregar la imagen seleccionada al conjunto
        }
    });

    tecnologiaImages.forEach((img) => {
        const closeButtonDiv = document.createElement('div');
        closeButtonDiv.className = 'close-button-container'; // Clase contenedora

        const closeButtonSpan = document.createElement('span');
        closeButtonSpan.textContent = 'X';
        closeButtonSpan.className = 'close-button'; // Clase existente

        closeButtonDiv.appendChild(closeButtonSpan);
        img.appendChild(closeButtonDiv);

        closeButtonSpan.addEventListener('click', () => {
            img.style.display = 'none';
            selectedImages.delete(img); // Remover la imagen del conjunto al hacer clic en el botón 'X'
        });
    });
});
