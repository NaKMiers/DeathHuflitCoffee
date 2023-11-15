const cardList = document.querySelector('.card-list');
const cardBoxes = document.querySelectorAll('.card-box');
let currentSlide = parseInt(localStorage.getItem('currentSlide')) || 0;

function updateSlide() {
    if (cardList) {
        cardList.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    cardBoxes.forEach((box, index) => {
        if (index === currentSlide) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
}

// Hiển thị thẻ đầu tiên khi trang web tải lên
updateSlide();

// Kiểm tra và thêm sự kiện cho nextButton và prevButton nếu chúng tồn tại
const nextButton = document.querySelector('.nextcard-button');
const prevButton = document.querySelector('.previouscard-button');

if (nextButton) {
    nextButton.addEventListener('click', () => {
        if (currentSlide < cardBoxes.length - 1) {
            currentSlide++;
            localStorage.setItem('currentSlide', currentSlide);
            updateSlide();
        }
    });
}

if (prevButton) {
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            localStorage.setItem('currentSlide', currentSlide);
            updateSlide();
        }
    });
}
