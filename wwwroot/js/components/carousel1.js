$(document).ready(function () {
   const prevBtn = $('.carousel1__slide-btn.prev')
   const nextBtn = $('.carousel1__slide-btn.next')
   const carouselItem = $('.carousel1__item')

   if (carouselItem.length > 0) {
      let width = carouselItem.width()

      $(window).resize(function () {
         width = carouselItem.width()
      })

      prevBtn.click(function () {
         const container = $(this).closest('.carousel1').find('.carousel1__container')
         container.css('scrollBehavior', 'smooth')
         container.scrollLeft(container.scrollLeft() - width)
      })

      nextBtn.click(function () {
         const container = $(this).closest('.carousel1').find('.carousel1__container')
         container.css('scrollBehavior', 'smooth')
         container.scrollLeft(container.scrollLeft() + width)
      })
   }
})
