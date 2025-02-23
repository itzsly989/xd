// Esperamos a que el contenido de la página cargue
document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.querySelector('.card-container');
    const animatedText = document.querySelector('.animated-text');

    // Detectamos cuando termina la animación de escritura
    animatedText.addEventListener('animationend', () => {
        // Giramos la tarjeta después de que termine la animación
        cardContainer.style.transform = 'rotateY(180deg)';
    });
});