// // Lấy thẻ span có class "slider-curren"
// const sliderCurrent = document.querySelector(".slider-curren");
// // Định nghĩa biến để theo dõi giá trị hiện tại
// let currentSlide1 = 1;
// let totalSlides1 = 3;
// function updateSliderValue() {
//   // Tăng giá trị hiện tại lên 1 đơn vị
//   currentSlide1++;

//   // Nếu giá trị hiện tại vượt quá giới hạn, quay lại giá trị 1
//   if (currentSlide1 > totalSlides1) {
//     currentSlide1 = 1;
//   }

//   // Cập nhật giá trị trong thẻ span
//   sliderCurrent.textContent = `${currentSlide1}/${totalSlides1}`;
// }
// // Cập nhật giá trị mỗi 3 giây
// const autoUpdateInterval = setInterval(updateSliderValue, 3000);
// Lấy thẻ span có class "slider-curren"
const sliderCurrent = document.querySelector('.slider-curren')

// Lấy nút button có id "playButton"
const playButton2 = document.getElementById('playButton')

// Định nghĩa biến để theo dõi giá trị hiện tại
let currentSlide1 = 1
let totalSlides1 = 3

// Biến để kiểm soát trạng thái của trình chiếu tự động
let isAutoPlaying = true

// Hàm cập nhật giá trị
function updateSliderValue() {
   // Tăng giá trị hiện tại lên 1 đơn vị
   currentSlide1++

   // Nếu giá trị hiện tại vượt quá giới hạn, quay lại giá trị 1
   if (currentSlide1 > totalSlides1) {
      currentSlide1 = 1
   }

   // Cập nhật giá trị trong thẻ span
   sliderCurrent.textContent = `${currentSlide1}/${totalSlides1}`
}

// Cập nhật giá trị mỗi 3 giây
let autoUpdateInterval = setInterval(updateSliderValue, 3000)

// Hàm bắt đầu hoặc dừng trình chiếu tự động
function toggleAutoPlay() {
   if (isAutoPlaying) {
      clearInterval(autoUpdateInterval) // Dừng tự động cập nhật
   } else {
      autoUpdateInterval = setInterval(updateSliderValue, 3000) // Tiếp tục tự động cập nhật
   }
   isAutoPlaying = !isAutoPlaying // Đảo ngược trạng thái
}

// Bắt sự kiện khi bấm vào nút "playButton"
playButton2.addEventListener('click', toggleAutoPlay)

// Lấy nút button có id "nextButton"
const nextButton1 = document.getElementById('nextButton')

// Lấy nút button có id "prevButton"
const prevButton1 = document.getElementById('prevButton')

// Định nghĩa biến để theo dõi giá trị hiện tại
let leftNumber = 1

// Sự kiện khi bấm nút "Next"
nextButton1.addEventListener('click', () => {
   // Tăng giá trị bên trái lên 1 đơn vị, nếu đạt đến giới hạn 3, quay lại giá trị 1
   if (leftNumber < 3) {
      leftNumber += 1
   } else {
      leftNumber = 1
   }
   // Cập nhật giá trị trong thẻ span
   sliderCurrent.textContent = `${leftNumber}/3`
})

// Sự kiện khi bấm nút "Previous"
prevButton1.addEventListener('click', () => {
   // Giảm giá trị bên trái đi 1 đơn vị, nếu giá trị là 1, chuyển thành 3
   if (leftNumber > 1) {
      leftNumber -= 1
   } else {
      leftNumber = 3
   }
   // Cập nhật giá trị trong thẻ span
   sliderCurrent.textContent = `${leftNumber}/3`
})

let slideIndex = 0
let slides = document.querySelectorAll('.Slideshow-slide')
let prevButton = document.getElementById('prevButton')
let nextButton = document.getElementById('nextButton')
let playButton = document.getElementById('playButton')
let playing = true

const pauseIcon = document.querySelector('.slideshow__control-icon--pause')

playButton.addEventListener('click', function () {
   if (pauseIcon.style.display === 'block') {
      pauseIcon.style.display = 'none'
   } else {
      pauseIcon.style.display = 'block'
   }
})
function showSlide(n) {
   slides[slideIndex].style.display = 'none'
   slideIndex = (n + slides.length) % slides.length
   slides[slideIndex].style.display = 'block'
}

function nextSlide() {
   showSlide(slideIndex + 1)
}

function prevSlide() {
   showSlide(slideIndex - 1)
}
function togglePlay() {
   const playButtonContainer = document.getElementById('playButton')

   if (playing) {
      // Hiển thị biểu tượng "play" và ẩn biểu tượng "pause"
      playButtonContainer.querySelector('.slideshow__control-icon--pause').style.display = 'block'
      playButtonContainer.querySelector('.slideshow__control-icon--play').style.display = 'none'
      playing = false
   } else {
      // Hiển thị biểu tượng "pause" và ẩn biểu tượng "play"
      playButtonContainer.querySelector('.slideshow__control-icon--pause').style.display = 'none'
      playButtonContainer.querySelector('.slideshow__control-icon--play').style.display = 'block'
      playing = true
      autoPlay()
   }
}
function updateSlideValue() {
   // Tăng giá trị bên trái lên 1 đơn vị, nếu đạt đến giới hạn, quay lại giá trị 1
   slideIndex = (slideIndex + 1) % totalSlides
   // Cập nhật giá trị trong thẻ span
   sliderCurrent.textContent = `${slideIndex + 1} / ${totalSlides}`
}
// Thiết lập khoảng thời gian để chuyển slide tự động (ví dụ: mỗi 3 giây)
const autoSwitchInterval = setInterval(updateSlideValue, 3000)
// Hàm bắt đầu trình chiếu tự động
function startAutoPlay() {
   autoSwitchInterval = setInterval(updateSlideValue, 3000)
}

function autoPlay() {
   if (playing) {
      nextSlide()
      setTimeout(autoPlay, 3000) // 3 seconds delay between slides
   }
}
nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)
playButton.addEventListener('click', togglePlay)

showSlide(slideIndex) // Hiển thị slide đầu tiên
autoPlay() // Bắt đầu trình chiếu tự động

// Di chuyển slide theo sự thay đổi của chuột hoặc cử chỉ chạm
setTranslateX(currentTranslate + diffX)

function endDrag() {
   isDragging = false
}

function getTranslateX() {
   const transform = window.getComputedStyle(slideshow).getPropertyValue('transform')
   const matrix = new DOMMatrix(transform)
   return matrix.m41
}
function setTranslateX(translateX) {
   slideshow.style.transform = `translateX(${translateX}px)`
}
