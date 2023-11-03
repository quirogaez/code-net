// Seleccionar el elemento de la ventana modal
var modal = document.getElementById('miModal');

// Seleccionar el botón de cierre
var cerrarBoton = document.getElementById('cerrarModal');

// Mostrar la ventana modal automáticamente
modal.style.display = 'block';

// Agregar un event listener para cerrar la ventana modal cuando se hace clic en el botón de cierre
cerrarBoton.addEventListener('click', function() {
  modal.style.display = 'none';
});