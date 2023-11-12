// Lấy tham chiếu đến các phần tử
const writeReviewButton = document.getElementById('writeReviewButton')
const reviewModal = document.getElementById('reviewModal')
const closeModalButton = document.getElementById('closeModal')
const reviewForm = document.getElementById('reviewForm')
const productNameInput = document.getElementById('productName')
const productImage = document.getElementById('productImage')

// Định nghĩa hàm để hiển thị modal
function openModal() {
   reviewModal.style.display = 'block'
}

// Định nghĩa hàm để đóng modal
function closeModal() {
   reviewModal.style.display = 'none'
}

// Xử lý sự kiện khi nút "Write a review" được nhấn
writeReviewButton.addEventListener('click', openModal)

// Xử lý sự kiện khi nút đóng modal được nhấn
closeModalButton.addEventListener('click', closeModal)

// Xử lý sự kiện khi biểu mẫu đánh giá được gửi
reviewForm.addEventListener('submit', function (event) {
   event.preventDefault()
   // Lấy giá trị từ biểu mẫu và xử lý nó, ví dụ: gửi lên máy chủ
   const productName = productNameInput.value
   const rating = document.getElementById('rating').value
   const comment = document.getElementById('comment').value
   console.log('Tên sản phẩm: ' + productName)
   console.log('Đánh giá sao: ' + rating)
   console.log('Bình luận: ' + comment)
   // Sau khi xử lý xong, có thể đóng modal
   closeModal()
})
const starContainers = document.querySelectorAll('.star-container')
const ratingTexts = document.querySelectorAll('.rating-text span')

starContainers.forEach(starContainer => {
   starContainer.addEventListener('click', () => {
      const rating = starContainer.getAttribute('data-rating')
      ratingTexts.forEach(text => (text.style.display = 'none'))
      const selectedText = document.querySelector(`.rating-text span[data-rating="${rating}"]`)
      selectedText.style.display = 'inline'
      document.querySelector('.rating-text span[data-rating="0"]').style.display = 'none'
   })
})

// change slide to add photo when user click on add photo button
const reviewModalSlideTrack = document.querySelector('.review-modal-slidetrack')

document.getElementById('add-photo-button').onclick = () => {
   reviewModalSlideTrack.style.marginLeft = '-100%'
}

document.getElementById('choose-photo_file').addEventListener('click', () => {
   document.getElementById('image-upload').click()
})

document.getElementById('image-upload').addEventListener('change', event => {
   const files = event.target.files
   if (files && files[0]) {
      const reader = new FileReader()
      reader.onload = function (e) {
         // Xử lý ảnh ở đây, ví dụ: hiển thị ảnh
         const image = document.createElement('img')
         image.src = e.target.result
         document.body.appendChild(image)
      }
      reader.readAsDataURL(files[0])
   }
})

const reviewModalSlideTracke = document.querySelector('.review-modal-slidetrack')

document.getElementById('close-modal-button').onclick = () => {
   reviewModalSlideTrack.style.marginLeft = 0
}
let selectedButton = null

function toggleSelection(buttonId) {
   if (selectedButton === buttonId) {
      // Deselect the button if it's already selected
      document.getElementById(buttonId).classList.remove('T__review__yesno__selected')
      selectedButton = null
      document.getElementById('checkmark').style.display = 'none'
   } else {
      // Select the button and show the checkmark
      if (selectedButton) {
         document.getElementById(selectedButton).classList.remove('T__review__yesno__selected')
      }
      document.getElementById(buttonId).classList.add('T__review__yesno__selected')
      selectedButton = buttonId
      document.getElementById('checkmark').style.display = 'block'
   }
}

// Tạo sự kiện khi con trỏ rời nút để đảm bảo màu không thay đổi
document.getElementById('yesButton').addEventListener('mouseleave', function () {
   if (selectedButton !== 'yesButton') {
      document.getElementById('yesButton').classList.remove('T__review__yesno__selected')
   }
})

document.getElementById('noButton').addEventListener('mouseleave', function () {
   if (selectedButton !== 'noButton') {
      document.getElementById('noButton').classList.remove('T__review__yesno__selected')
   }
})

document.getElementById('yesButton').addEventListener('click', function () {
   toggleSelection('yesButton')
})

document.getElementById('noButton').addEventListener('click', function () {
   toggleSelection('noButton')
})
const newStarContainers = document.querySelectorAll('.New_Star_Container')
const newRatingTexts = document.querySelectorAll('.New_Rating_Text span')

newStarContainers.forEach(newStarContainer => {
   newStarContainer.addEventListener('click', () => {
      const rating = newStarContainer.getAttribute('data-rating')
      newRatingTexts.forEach(newText => (newText.style.display = 'none'))
      const selectedText = document.querySelector(`.New_Rating_Text span[data-rating="${rating}"]`)
      selectedText.style.display = 'inline'
      document.querySelector('.New_Rating_Text span[data-rating="0"]').style.display = 'none'
   })
})
const customStarContainers = document.querySelectorAll('.Custom_Star_Container')
const customRatingTexts = document.querySelectorAll('.Custom_Rating_Text span')

customStarContainers.forEach(customStarContainer => {
   customStarContainer.addEventListener('click', () => {
      const rating = customStarContainer.getAttribute('data-rating')
      customRatingTexts.forEach(customText => (customText.style.display = 'none'))
      const selectedText = document.querySelector(
         `.Custom_Rating_Text span[data-rating="${rating}"]`
      )
      selectedText.style.display = 'inline'
      document.querySelector('.Custom_Rating_Text span[data-rating="0"]').style.display = 'none'
   })
})
