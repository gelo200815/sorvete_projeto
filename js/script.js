let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showImage(index) {
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

document.getElementById('next-button').addEventListener('click', nextImage);
document.getElementById('prev-button').addEventListener('click', prevImage);

setInterval(nextImage, 5000);