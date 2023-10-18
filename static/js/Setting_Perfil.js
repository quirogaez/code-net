document.addEventListener("DOMContentLoaded", function () {
    const tecnologyInput = document.getElementById('tecnology');
    const selectedTecnologyImg = document.getElementById('selected-tecnology-img');
    const tecnologyList = document.getElementById('tecnology-list').querySelectorAll('option');
    const tecnologySetting = document.querySelector('.tecnology-setting');

    tecnologyInput.addEventListener('input', () => {
        const searchValue = tecnologyInput.value.toLowerCase();
        tecnologyList.forEach(option => {
            if (option.value.toLowerCase() === searchValue) {
                const imagenSrc = option.getAttribute('data-imagen');
                selectedTecnologyImg.src = imagenSrc;
                selectedTecnologyImg.style.display = 'block';
                tecnologyInput.value = ''; // Limpia el input después de seleccionar una tecnología
            }
        });
    });

    // Aquí puedes agregar más lógica para manejar las tecnologías seleccionadas
});
