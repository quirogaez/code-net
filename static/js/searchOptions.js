function mostrarContenido(contenido, elemento) {
    const elementos = document.querySelectorAll('.container__options > a');

    elementos.forEach(el => {
        el.classList.remove('selected');
    });

    const contenidoAMostrar = document.getElementById(contenido);
    if (contenidoAMostrar) {
        // Ocultar todos los elementos
        const todosLosElementos = document.querySelectorAll('.containerSearch > div');
        todosLosElementos.forEach(el => {
            el.style.display = 'none';
        });

        // Mostrar el contenido correspondiente
        contenidoAMostrar.style.display = 'flex';

        // Agregar la clase 'selected' al elemento clicado
        elemento.classList.add('selected');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const btnCategorias = document.getElementById('btnCategorias');
    if (btnCategorias) {
        btnCategorias.click();
    }
});
