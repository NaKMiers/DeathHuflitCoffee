// const arrowRight = document.getElementById("arrowRight");
// const arrowLeft = document.getElementById("arrowLeft");
// const blocks = document.querySelector(".blocks");

// if (window.innerWidth <= 990) {
//    let currentPosition = 0;

//    // Xử lý khi nhấp vào mũi tên bên phải
//    arrowRight.addEventListener("click", () => {
//       if (currentPosition > -30) {
//          currentPosition -= 17;
//          blocks.style.transform = `translateX(${currentPosition}%)`;
//       }
//    });

//    // Xử lý khi nhấp vào mũi tên bên trái
//    arrowLeft.addEventListener("click", () => {
//       if (currentPosition < 0) {
//          currentPosition += 17;
//          blocks.style.transform = `translateX(${currentPosition}%)`;
//       }
//    });
// } else {
//    let currentPosition = 0;

//    // Xử lý khi nhấp vào mũi tên bên phải
//    arrowRight.addEventListener("click", () => {
//       if (currentPosition > -30) {
//          currentPosition -= 18.5;
//          blocks.style.transform = `translateX(${currentPosition}%)`;
//       }
//    });

//    // Xử lý khi nhấp vào mũi tên bên trái
//    arrowLeft.addEventListener("click", () => {
//       if (currentPosition < 0) {
//          currentPosition += 18.5;
//          blocks.style.transform = `translateX(${currentPosition}%)`;
//       }
//    });
// }
// window.addEventListener("load", toggleContent);
// window.addEventListener("resize", toggleContent);
const arrowRight = document.getElementById("arrowRight");
const arrowLeft = document.getElementById("arrowLeft");
const blocks = document.querySelector(".blocks");

let currentPosition = 0;

// Cập nhật vị trí của các khối
function updateBlockPosition() {
   blocks.style.transform = `translateX(${currentPosition}%)`;
}

// Xử lý khi nhấp vào mũi tên bên phải cho màn hình nhỏ hơn 990px
arrowRight.addEventListener("click", () => {
   if (window.innerWidth <= 990) {
      if (currentPosition > -80) {
         currentPosition -= 16.7; // Điều chỉnh giá trị điều kiện
         updateBlockPosition();
      }
   } else {
      if (currentPosition > -30) {
         currentPosition -= 18.5; // Điều chỉnh giá trị điều kiện
         updateBlockPosition();
      }
   }
});

// Xử lý khi nhấp vào mũi tên bên trái cho màn hình nhỏ hơn 990px
arrowLeft.addEventListener("click", () => {
   if (window.innerWidth <= 990) {
      if (currentPosition < 0) {
         currentPosition += 16.7; // Điều chỉnh giá trị điều kiện
         updateBlockPosition();
      }
   } else {
      if (currentPosition < 0) {
         currentPosition += 18.5; // Điều chỉnh giá trị điều kiện
         updateBlockPosition();
      }
   }
});

// Xử lý khi kích thước màn hình thay đổi
function handleResize() {
   if (window.innerWidth <= 990) {
      // Điều kiện cho màn hình nhỏ
      currentPosition = 0; // Giới hạn giá trị currentPosition
   } else {
      // Điều kiện cho màn hình lớn
      currentPosition = 0; // Đặt lại currentPosition cho màn hình lớn
   }

   updateBlockPosition();
}

// Gọi hàm khi trang được tải và khi kích thước màn hình thay đổi
window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);
const card__inner = document.querySelectorAll(
   ".article-card-wrapper.card-wrapper.underline-links-hover"
);
card__inner.forEach(card__inner => {
   card__inner.addEventListener("click", () => {
      const link = card__inner.getAttribute("data-link");
      if (link) {
         window.location.href = link;
      }
   });
});
