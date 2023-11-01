const cardBoxes = document.querySelectorAll(".card-box");
const nextButton = document.querySelector(".nextcard-button");
const prevButton = document.querySelector(".prevous-button");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
  cardBoxes[currentIndex].style.display = "none"; // Ẩn thẻ hiện tại

  if (currentIndex < cardBoxes.length - 1) {
    currentIndex++; // Tăng chỉ số nếu không phải thẻ cuối cùng
  }

  cardBoxes[currentIndex].style.display = "block"; // Hiển thị thẻ mới
});

prevButton.addEventListener("click", () => {
  cardBoxes[currentIndex].style.display = "none"; // Ẩn thẻ hiện tại

  if (currentIndex > 0) {
    currentIndex--; // Giảm chỉ số nếu không phải thẻ đầu tiên
  }

  cardBoxes[currentIndex].style.display = "block"; // Hiển thị thẻ mới
});


