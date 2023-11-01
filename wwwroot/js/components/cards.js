const cardList = document.querySelector(".card-list");
const nextButton = document.querySelector(".nextcard-button");
const prevButton = document.querySelector(".prevous-button");

let currentSlide = 0;
let isMobileView = false; // Biến kiểm tra xem màn hình có đang ở chế độ mobile (nhỏ hơn 990px) hay không

nextButton.addEventListener("click", () => {
    if (currentSlide < 2) { // Kiểm tra xem đã ở cuối danh sách chưa
        currentSlide++;
    } else {
        currentSlide = 0; // Quay lại thẻ đầu tiên nếu ở cuối danh sách
    }
    updateSlide();
});

prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = 2; // Quay lại thẻ cuối cùng nếu ở thẻ đầu tiên
    }
    updateSlide();
});
function updateSlide() {
    const liElements = cardList.querySelectorAll(".card-box");
    liElements.forEach((li, index) => {
        if (index === currentSlide) {
            li.classList.add("active"); // Hiển thị thẻ hiện tại
        } 
    });
}
// Hiển thị thẻ đầu tiên khi trang web tải lên
updateSlide();
// Kiểm tra kích thước màn hình và chuyển giữa chế độ mobile và desktop
function checkScreenSize() {
    if (window.innerWidth < 990 && !isMobileView) {
        // Chuyển sang chế độ mobile
        isMobileView = true;
        // Thực hiện chức năng chuyển trang hoặc thực hiện chức năng mobile ở đây
    } else if (window.innerWidth >= 990 && isMobileView) {
        // Quay lại chế độ desktop
        isMobileView = false;
        // Thực hiện chức năng desktop ở đây

        // Hiển thị tất cả các thẻ li khi quay lại chế độ desktop
        liElements.forEach((li) => {
            li.style.display = "block";
        });
    }
}
// Thực hiện kiểm tra kích thước màn hình khi tải lại trang và cả khi thay đổi kích thước cửa sổ
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);


