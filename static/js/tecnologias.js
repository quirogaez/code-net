// Agregar un evento "DOMContentLoaded" para ejecutar el código al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento select y las imágenes
    const selectTecnologias = document.querySelector('select[name="tecnologias');
    const tecnologiaImages = document.querySelectorAll('.img__tecnology');

    // Ocultar todas las imágenes al cargar la página
    tecnologiaImages.forEach((img) => {
        img.style.display = 'none';
    });

    // Agregar un evento de cambio al select
    selectTecnologias.addEventListener('change', (event) => {
        const selectedOption = selectTecnologias.value;

        // Mostrar la imagen correspondiente a la opción seleccionada
        const selectedImage = document.getElementById(selectedOption);
        if (selectedImage) {
            selectedImage.style.display = 'block';
        }
    });

    // Agregar un evento para cerrar las imágenes al hacer clic en la "X"
    tecnologiaImages.forEach((img) => {
        const closeButton = document.createElement('span');
        closeButton.textContent = 'X';
        closeButton.className = 'close-button';
        img.appendChild(closeButton);

        closeButton.addEventListener('click', () => {
            img.style.display = 'none';
            selectTecnologias.selectedIndex = 0; // Restablecer el select a su opción predeterminada
        });
    });
});
