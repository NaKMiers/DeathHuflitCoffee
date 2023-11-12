const buttons = document.querySelectorAll('.DirectionHeding__panel-4-crf-product-name')

buttons.forEach(button => {
   let isClicked = false

   button.addEventListener('mouseenter', function () {
      if (!isClicked) {
         button.classList.add('active')
      }
   })

   button.addEventListener('click', function () {
      if (!isClicked) {
         button.classList.add('active')
      } else {
         button.classList.remove('active')
      }
      isClicked = !isClicked // Đảo trạng thái isClicked khi click
   })

   button.addEventListener('mouseleave', function () {
      if (!isClicked) {
         button.classList.remove('active')
      }
   })
})
