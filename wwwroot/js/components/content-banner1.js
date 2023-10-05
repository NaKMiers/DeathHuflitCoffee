const contentBanner1 = document.querySelector('.content-banner-1.sliders')

if (contentBanner1) {
   console.log(contentBanner1)
   const slideTrack = document.querySelector('.content-banner-1__slide-track')
   const showCurSlide = document.querySelector('.content-banner-1__controls__current-slide')
   const prevBtn = document.querySelector('.content-banner-1__control-btn.prev-btn')
   const nextBtn = document.querySelector('.content-banner-1__control-btn.next-btn')
   const playBtn = document.querySelector('.content-banner-1__control-btn.play-btn')

   let curSlide = 1
   const slideLength = slideTrack.children.length
   let interval

   // render slide
   const renderSlide = () => {
      slideTrack.style.marginLeft = `calc(-100% * ${curSlide - 1})`
      showCurSlide.textContent = `${curSlide}/${slideLength}`
   }

   // render slide at the first time mount
   renderSlide()

   // change to next slide
   const nextSlide = () => {
      curSlide = curSlide === slideLength ? 1 : curSlide + 1
      renderSlide()
   }

   // change to prev slide
   const prevSlide = () => {
      curSlide = curSlide === slideLength ? 1 : curSlide + 1
      renderSlide()
   }

   // next btn is clicked
   nextBtn.onclick = nextSlide

   // prev btn is clicked
   prevBtn.onclick = prevSlide

   // play btn is clicked
   playBtn.onclick = () => {
      if (playBtn.className.includes('pause')) {
         playBtn.classList.toggle('pause')
         interval = setInterval(() => {
            nextSlide()
         }, 3000)
      } else {
         playBtn.classList.toggle('pause')
         clearInterval(interval)
      }
   }
}
