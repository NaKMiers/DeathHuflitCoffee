// const cardSlide = document.querySelector('.card-slide');
// const cardList = document.querySelector('.card-list');
// const cardBoxes = document.querySelectorAll('.card-box');
// const sectionWidth = cardBoxes[0].offsetWidth; // Kích thước của mỗi phần
// let currentSection = 0; // Phần hiện tại

// function scrollToSection(section) {
//     currentSection = section;
//     const targetX = currentSection * sectionWidth;
//     cardSlide.scrollLeft = targetX;
// }

// function scrollToPreviousSection() {
//     if (currentSection > 0) {
//         scrollToSection(currentSection - 1);
//     }
// }

// function scrollToNextSection() {
//     if (currentSection < cardBoxes.length - 1) {
//         scrollToSection(currentSection + 1);
//     }
// }

// document.querySelector('.prev-button').addEventListener('click', scrollToPreviousSection);
// document.querySelector('.next-button').addEventListener('click', scrollToNextSection);