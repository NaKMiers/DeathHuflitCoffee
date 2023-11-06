const slides = document.querySelectorAll('.Slideshow-slide')
const banner = document.querySelector('.Slideshow-banner')
const counter = document.querySelector('.slider-counter--current')
const playButton = document.querySelector('.slideshow-icon-play')
const pauseButton = document.querySelector('.slideshow-icon-pause')
const nextButton = document.querySelector('.Slideshow-nextbutton')
const prevButton = document.querySelector('.Slideshow-prevousbutton')

let currentSlideIndex = 0
let animationPaused = false

function showSlide(index) {
   banner.style.transform = `translateX(-${100 * index}%)`
   currentSlideIndex = index
   counter.textContent = `${currentSlideIndex + 1}`
}

function nextSlide() {
   currentSlideIndex = (currentSlideIndex + 1) % slides.length
   showSlide(currentSlideIndex)
}

function previousSlide() {
   currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length
   showSlide(currentSlideIndex)
}

function toggleKeyframes() {
   animationPaused = !animationPaused
   if (animationPaused) {
      banner.style.animation = 'none'
      pauseButton.style.display = 'none'
      playButton.style.display = 'block'
   } else {
      banner.style.animation = 'slideshow 5s infinite'
      pauseButton.style.display = 'block'
      playButton.style.display = 'none'
   }
}

const autoButton = document.querySelector('.Slideshow-auto')
autoButton.addEventListener('click', toggleKeyframes)

nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', previousSlide)

// Tự động chuyển slide sau mỗi khoảng thời gian
let autoSlideInterval

function startAutoSlide() {
   autoSlideInterval = setInterval(() => {
      if (!animationPaused) {
         nextSlide()
      }
   }, 3000)
}

startAutoSlide()
