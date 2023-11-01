// Lấy danh sách các thẻ li và nút Previous và Next
const liItems = document.querySelectorAll('.card-box');
const prevButton = document.querySelector('.prevous-button');
const nextButton = document.querySelector('.nextcard-button');

// Định nghĩa biến để theo dõi vị trí hiện tại của thẻ active
let currentIndex = 0;

// Hàm để hiển thị thẻ li tương ứng với vị trí index
function showLi(index) {
    liItems.forEach((li, i) => {
        if (i === index) {
            li.classList.add('active');
        } else {
            li.classList.remove('active');
        }
    });
}

// Sự kiện khi nhấn nút Previous
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + liItems.length) % liItems.length;
    showLi(currentIndex);
});

// Sự kiện khi nhấn nút Next
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % liItems.length;
    showLi(currentIndex);
});

// Hiển thị thẻ li đầu tiên khi trang web được tải
showLi(currentIndex);
