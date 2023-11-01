const cardList = document.querySelector(".card-list");
const cardBoxes = document.querySelectorAll(".card-box");
const nextButton = document.querySelector(".nextcard-button");
const prevButton = document.querySelector(".prevous-button");

let currentSlide = 0;

nextButton.addEventListener("click", () => {
    if (currentSlide < cardBoxes.length - 1) {
        currentSlide++;
        updateSlide();
    }
});

prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

function updateSlide() {
    cardList.style.transform = `translateX(-${currentSlide * 100}%)`;

    cardBoxes.forEach((box, index) => {
        if (index === currentSlide) {
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    });
}

// Hiển thị thẻ đầu tiên khi trang web tải lên
updateSlide();
