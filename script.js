let carouselIndex = 0;

function scrollCarousel(direction, carouselId) {
    var carousel = document.getElementById(carouselId);
    var scrollAmount = carousel.querySelector('.menu-item').offsetWidth; // Ancho de un solo producto

    if (direction === 'left') {
        if (carousel.scrollLeft > 0) { // Verifica si hay espacio para desplazarse a la izquierda
            carousel.scrollLeft -= scrollAmount; // Desplaza hacia la izquierda
        }
    } else if (direction === 'right') {
        if (carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth) { // Verifica si hay espacio para desplazarse a la derecha
            carousel.scrollLeft += scrollAmount; // Desplaza hacia la derecha
        }
    }
}

// Resto del código sigue igual...



// Selecciona todos los elementos de clase 'menu-item'
const menuItems = document.querySelectorAll('.menu-item');

// Itera sobre cada elemento y agrega un event listener para el evento 'click'
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Obtiene los detalles del producto del elemento clickeado
        const productName = item.querySelector('span').textContent;
        const productPrice = item.querySelector('.price').textContent;
        const productDescription = "Descripción del producto"; // Aquí puedes agregar la descripción del producto
        const productImageSrc = item.querySelector('img').src; // Obtiene la URL de la imagen del producto

        // Muestra los detalles del producto en la ventana emergente
        document.getElementById('productName').textContent = productName;
        document.getElementById('productPrice').textContent = productPrice;
        document.getElementById('productDescription').textContent = productDescription;
        document.getElementById('productImage').src = productImageSrc; // Establece la imagen del producto

        // Muestra la ventana emergente
        document.getElementById('productDetailsModal').style.display = 'block';
    });
});

// Agrega un event listener para el botón de cerrar la ventana emergente
document.querySelector('.close').addEventListener('click', () => {
    // Oculta la ventana emergente al hacer click en el botón de cerrar
    document.getElementById('productDetailsModal').style.display = 'none';
});