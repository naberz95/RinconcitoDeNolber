function mostrarCategoria(categoria) {
    // Ocultar todas las secciones de productos
    document.querySelectorAll('.categoria-productos').forEach(seccion => {
        seccion.style.display = 'none';
    });

    // Mostrar la categoría seleccionada
    document.getElementById(`productos-${categoria}`).style.display = 'block';

    // Hacer scroll automático a la sección de productos
    document.getElementById(`productos-${categoria}`).scrollIntoView({ behavior: 'smooth' });
}
