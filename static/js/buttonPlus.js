let optionAdd = false;

function showAddOption() {
    if (optionAdd === false) {
        document.querySelector(".showPublication").style.display = "block";
        optionAdd = true;

        // Agregar un event listener para cerrar la ventana modal al hacer clic fuera de ella
        document.addEventListener('click', closeIfClickedOutside);
    } else {
        document.querySelector(".showPublication").style.display = "none";
        optionAdd = false;

        // Eliminar el event listener cuando se cierra la ventana modal
        document.removeEventListener('click', closeIfClickedOutside);
    }
}

function closeIfClickedOutside(event) {
    const publication = document.querySelector(".showPublication");
    const buttonPlus = document.querySelector(".buttonPlus");

    // Verificar si el clic se realiza fuera de la ventana modal y del botón para abrir la ventana
    if (event.target !== publication && event.target !== buttonPlus) {
        publication.style.display = 'none';
        optionAdd = false;

        // Eliminar el event listener una vez que se cierra la ventana modal
        document.removeEventListener('click', closeIfClickedOutside);
    }
}
