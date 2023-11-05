$(function () {
   // Lấy danh sách các mục trong slider và các nút điều hướng
   const slides = document.querySelectorAll('.slide')
   const prevButton = document.querySelector('.Sliderprevous-button')
   const nextButton = document.querySelector('.Slidernext-button')

   // Đánh dấu mục hiện tại và biến kiểm tra đã đến cuối danh sách
   let currentSlide = 0
   let reachedEnd = false

   // Hàm hiển thị slide hiện tại
   function showSlide() {
      slides.forEach((slide, index) => {
         if (index === currentSlide) {
            slide.style.display = 'block'
         } else {
            slide.style.display = 'none'
         }
      })
   }

   // Hàm xử lý chuyển slide
   function changeSlide(direction) {
      if (direction === 'prev') {
         // Xử lý chuyển đổi slide trước đó
         if (currentSlide === 0) {
            if (reachedEnd) {
               // Đang ở slide cuối, không cho phép tiến
               return
            } else {
               // Đã quay lại đầu sau khi ở slide cuối
               reachedEnd = true
            }
         } else {
            currentSlide-- // Tiến lại 1 slide
         }
      } else if (direction === 'next') {
         // Xử lý chuyển đổi slide kế tiếp
         if (currentSlide === slides.length - 1) {
            if (reachedEnd) {
               // Đang ở slide cuối, không cho phép lùi
               return
            } else {
               // Đã quay lại đầu sau khi ở slide đầu
               reachedEnd = true
            }
         } else {
            currentSlide++ // Tiến lên 1 slide
         }
      }
      // Hiển thị slide mới
      showSlide()
   }

   // Kiểm tra kích thước màn hình và thực hiện code chỉ khi kích thước nhỏ hơn 990px
   if (window.innerWidth > 990) {
      // Xử lý sự kiện click cho nút prevButton
      prevButton.addEventListener('click', () => {
         changeSlide('prev')
      })
      // Xử lý sự kiện click cho nút nextButton
      nextButton.addEventListener('click', () => {
         changeSlide('next')
      })
   }
})
