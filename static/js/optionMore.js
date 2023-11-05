let masOpcionesVisibles = false;

function showPlusOptions() {
    if (masOpcionesVisibles === false) {
        document.querySelector(".showPlus").style.display = "block";
        masOpcionesVisibles = true;

        // Agregar un event listener para cerrar la sección "showPlus" al hacer clic fuera de ella
        document.addEventListener('click', closeIfClickedOutsideShowPlus);
    } else {
        document.querySelector(".showPlus").style.display = "none";
        masOpcionesVisibles = false;

        // Eliminar el event listener cuando se cierra la sección "showPlus"
        document.removeEventListener('click', closeIfClickedOutsideShowPlus);
    }
}

function closeIfClickedOutsideShowPlus(event) {
    const showPlusSection = document.querySelector(".showPlus");
    const plusButton = document.querySelector(".menu-item3");

    // Verificar si el clic se realiza fuera de la sección "showPlus" y del botón de activación
    if (event.target !== showPlusSection && event.target !== plusButton) {
        showPlusSection.style.display = 'none';
        masOpcionesVisibles = false;

        // Eliminar el event listener una vez que se cierra la sección "showPlus"
        document.removeEventListener('click', closeIfClickedOutsideShowPlus);
    }
}
