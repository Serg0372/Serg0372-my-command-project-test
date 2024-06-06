
const carouselTrack = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    currentIndex = Math.min(currentIndex + 1, totalItems - 6); // Показуємо по 6 товарів
    updateCarousel();
});

function updateCarousel() {
    const width = document.querySelector('.carousel').offsetWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * (width / 2)}px)`; // Показуємо по 2 товари в ряду
};
