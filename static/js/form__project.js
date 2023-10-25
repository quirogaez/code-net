document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close__modalProject');
    const submitButton = document.querySelector('.button_post');
    const selectTecnologias = form.querySelector('select[name="tecnologias"]');


    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); 

        if (validateForm(form)) {

            modal.classList.add('modal--show');
        }
    });

    closeModal.addEventListener('click', function () {
        modal.classList.remove('modal--show');
    });

    // Función para validar el formulario
    function validateForm(form) {
        // Validar la selección de tecnologías
        const selectedTechnology = selectTecnologias.value;
        if (selectedTechnology === 'bootstrap') {

            alert('Debes seleccionar una tecnología válida.');
            return false; 
        }

        return true;
    }
});
