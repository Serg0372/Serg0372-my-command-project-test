
let currentIndex = 0;
const carouselTrack = document.querySelector('.carousel-track');
const totalItems = document.querySelectorAll('.carousel-item').length;

function updateCarousel() {
    const width = document.querySelector('.carousel').offsetWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * width}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}


setInterval(nextSlide, 2500);


function toggleFavorite(element) {
    element.classList.toggle('active');
}



