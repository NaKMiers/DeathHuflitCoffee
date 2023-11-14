const slides = document.querySelectorAll('.Slideshow-slide');
const banner = document.querySelector('.Slideshow-banner');
const counter = document.querySelector('.slideshow-counter--current');
const playButton = document.querySelector('.slideshow-icon-play');
const pauseButton = document.querySelector('.slideshow-icon-pause');
const nextButton = document.querySelector('.Slideshow-nextbutton');
const prevButton = document.querySelector('.Slideshow-prevousbutton');
let currentSlideIndex = 0;
let animationPaused = false;

function showSlide(index) {
    if (banner) {
        banner.style.transform = `translateX(-${100 * index}%)`;
    }
    currentSlideIndex = index;
    if (counter) {
        counter.textContent = `${currentSlideIndex + 1}`;
    }
}

function nextSlide() {
    if (banner) {
        banner.style.animation = 'none';
    }
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function previousSlide() {
    if (banner) {
        banner.style.animation = 'none';
    }
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

function toggleKeyframes() {
    animationPaused = !animationPaused;
    if (banner) {
        banner.style.animation = animationPaused ? 'none' : 'slideshow 5s infinite';
    }
    if (pauseButton && playButton) {
        pauseButton.style.display = animationPaused ? 'none' : 'block';
        playButton.style.display = animationPaused ? 'block' : 'none';
    }
}

const autoButton = document.querySelector('.Slideshow-auto');
if (autoButton) {
    autoButton.addEventListener('click', toggleKeyframes);
}

if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
}

if (prevButton) {
    prevButton.addEventListener('click', previousSlide);
}

// Tự động chuyển slide sau mỗi khoảng thời gian
let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        if (!animationPaused) {
            nextSlide();
        }
    }, 2500);
}

startAutoSlide();
