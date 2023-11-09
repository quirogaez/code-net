function mostrarContenido(contenido) {
    const elementos = document.querySelectorAll('.containerSearch > div');

    elementos.forEach(elemento => {
        elemento.style.display = 'none';
    });

    const contenidoAMostrar = document.getElementById(contenido);
    if (contenidoAMostrar) {
        contenidoAMostrar.style.display = 'block';
    }
}

// Simula un clic en el botón de Categorías al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const btnCategorias = document.getElementById('btnCategorias');
    if (btnCategorias) {
        btnCategorias.click(); // Simula un clic en el botón de Categorías
    }
});