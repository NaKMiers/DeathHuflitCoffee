const prevBtn = document.querySelector('.carousel1__slide-btn.prev')
const nextBtn = document.querySelector('.carousel1__slide-btn.next')
const container = document.querySelector('.carousel1__container')
const carouselItem = document.querySelector('.carousel1__item')

let width = carouselItem.offsetWidth

window.addEventListener('resize', () => {
   width = carouselItem.offsetWidth
})

nextBtn.onclick = () => {
   container.style.scrollBehavior = 'smooth'
   container.scrollLeft = container.scrollLeft += width
}

prevBtn.onclick = () => {
   container.style.scrollBehavior = 'smooth'
   container.scrollLeft = container.scrollLeft -= width
}
