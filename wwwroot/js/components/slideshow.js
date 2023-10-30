let slideIndex = 0;
let slides = document.querySelectorAll(".Slideshow-slide");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
let playButton = document.getElementById("playButton");
let playing = true;

function showSlide(n) {
    slides[slideIndex].style.display = "none";
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function togglePlay() {
    if (playing) {
        // Hiển thị biểu tượng "play"
        playButton.innerHTML = `
            <svg class="slideshow__control-icon--pause" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
            focusable="false" fill="none" viewBox="0 0 10 14">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.48177 0.814643C0.81532 0.448245 0 0.930414 0 1.69094V12.2081C0 12.991 0.858787 13.4702 1.52503 13.0592L10.5398 7.49813C11.1918 7.09588 11.1679 6.13985 10.4965 5.77075L1.48177 0.814643Z"
                fill="currentColor"></path>
        </svg>`;
        playing = false;
    } else {
        // Hiển thị biểu tượng "pause"
        playButton.innerHTML = `
            <svg class="slideshow__control-icon--pause" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                focusable="false" fill="none" viewBox="0 0 10 14">
                <path fill="currentColor" d="M1.48177 0.814643C0.81532 0.448245 0 0.930414 0 1.69094V12.2081C0 12.991 0.858787 13.4702 1.52503 13.0592L10.5398 7.49813C11.1918 7.09588 11.1679 6.13985 10.4965 5.77075L1.48177 0.814643Z"></path>
            </svg>`;
        playing = true;
        autoPlay();
    }
 
   
}

function autoPlay() {
    if (playing) {
        nextSlide();
        setTimeout(autoPlay, 3000); // 3 seconds delay between slides
    }
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
playButton.addEventListener("click", togglePlay);

showSlide(slideIndex); // Hiển thị slide đầu tiên
autoPlay(); // Bắt đầu trình chiếu tự động

  // Di chuyển slide theo sự thay đổi của chuột hoặc cử chỉ chạm
    setTranslateX(currentTranslate + diffX);


function endDrag() {
    isDragging = false;
}

function getTranslateX() {
    const transform = window.getComputedStyle(slideshow).getPropertyValue("transform");
    const matrix = new DOMMatrix(transform);
    return matrix.m41;
}

function setTranslateX(translateX) {
    slideshow.style.transform = `translateX(${translateX}px)`;
}