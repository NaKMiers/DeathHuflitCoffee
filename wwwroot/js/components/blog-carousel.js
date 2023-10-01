const arrowRight = document.getElementById("BlogCarousel__arrowRight");
const arrowLeft = document.getElementById("BlogCarousel__arrowLeft");
const blocks = document.querySelector(".BlogCarousel__blocks");

let currentPosition = 0;

function updateBlockPosition() {
   blocks.style.transform = `translateX(${currentPosition}%)`;
}

arrowRight.addEventListener("click", () => {
   if (window.innerWidth <= 990) {
      if (currentPosition > -80) {
         currentPosition -= 16.7;
         updateBlockPosition();
      }
   } else {
      if (currentPosition > -30) {
         currentPosition -= 18.5;
         updateBlockPosition();
      }
   }
});

arrowLeft.addEventListener("click", () => {
   if (window.innerWidth <= 990) {
      if (currentPosition < 0) {
         currentPosition += 16.7;
         updateBlockPosition();
      }
   } else {
      if (currentPosition < 0) {
         currentPosition += 18.5;
         updateBlockPosition();
      }
   }
});

function handleResize() {
   if (window.innerWidth <= 990) {
      currentPosition = 0;
   } else {
      currentPosition = 0;
   }

   updateBlockPosition();
}

window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);

// Xử lý cho cặp mũi tên sau
const arrowRightNext1 = document.getElementById("BlogCarousel__arrowRight-next1");
const arrowLeftNext1 = document.getElementById("BlogCarousel__arrowLeft-next1");
const blocksNext1 = document.querySelector(".BlogCarousel__blocks-next1");

let currentPositionNext1 = 0;

function updateBlockPositionNext1() {
   blocksNext1.style.transform = `translateX(${currentPositionNext1}%)`;
}

arrowRightNext1.addEventListener("click", () => {
   if (window.innerWidth <= 990) {
      if (currentPositionNext1 > -80) {
         currentPositionNext1 -= 16.7;
         updateBlockPositionNext1();
      }
   } else {
      if (currentPositionNext1 > -30) {
         currentPositionNext1 -= 18.5;
         updateBlockPositionNext1();
      }
   }
});

arrowLeftNext1.addEventListener("click", () => {
   if (window.innerWidth <= 990) {
      if (currentPositionNext1 < 0) {
         currentPositionNext1 += 16.7;
         updateBlockPositionNext1();
      }
   } else {
      if (currentPositionNext1 < 0) {
         currentPositionNext1 += 18.5;
         updateBlockPositionNext1();
      }
   }
});

function handleResizeNext1() {
   if (window.innerWidth <= 990) {
      currentPositionNext1 = 0;
   } else {
      currentPositionNext1 = 0;
   }

   updateBlockPositionNext1();
}

window.addEventListener("load", handleResizeNext1);
window.addEventListener("resize", handleResizeNext1);

const arrowRightNext2 = document.getElementById("BlogCarousel__arrowRight-next2");
const arrowLeftNext2 = document.getElementById("BlogCarousel__arrowLeft-next2");
const blocksNext2 = document.querySelector(".BlogCarousel__blocks-next2");

let currentPositionNext2 = 0;

function updateBlockPositionNext2() {
   blocksNext2.style.transform = `translateX(${currentPositionNext2}%)`;
}

arrowRightNext2.addEventListener("click", () => {
   if (window.innerWidth <= 990) {
      if (currentPositionNext2 > -80) {
         currentPositionNext2 -= 16.7;
         updateBlockPositionNext2();
      }
   } else {
      if (currentPositionNext2 > -30) {
         currentPositionNext2 -= 18.5;
         updateBlockPositionNext2();
      }
   }
});

arrowLeftNext2.addEventListener("click", () => {
   if (window.innerWidth <= 990) {
      if (currentPositionNext2 < 0) {
         currentPositionNext2 += 16.7;
         updateBlockPositionNext2();
      }
   } else {
      if (currentPositionNext2 < 0) {
         currentPositionNext2 += 18.5;
         updateBlockPositionNext2();
      }
   }
});

function handleResizeNext2() {
   if (window.innerWidth <= 990) {
      currentPositionNext2 = 0;
   } else {
      currentPositionNext2 = 0;
   }

   updateBlockPositionNext2();
}

window.addEventListener("load", handleResizeNext2);
window.addEventListener("resize", handleResizeNext2);
const arrowRightNext3 = document.getElementById("BlogCarousel__arrowRight-next3");
const arrowLeftNext3 = document.getElementById("BlogCarousel__arrowLeft-next3");
const blocksNext3 = document.querySelector(".BlogCarousel__blocks-next3");

let currentPositionNext3 = 0;

function updateBlockPositionNext3() {
   blocksNext3.style.transform = `translateX(${currentPositionNext3}%)`;
}

arrowRightNext3.addEventListener("click", () => {
   if (window.innerWidth <= 990) {
      if (currentPositionNext3 > -80) {
         currentPositionNext3 -= 16.7;
         updateBlockPositionNext3();
      }
   } else {
      if (currentPositionNext3 > -30) {
         currentPositionNext3 -= 18.5;
         updateBlockPositionNext3();
      }
   }
});

arrowLeftNext3.addEventListener("click", () => {
   if (window.innerWidth <= 990) {
      if (currentPositionNext3 < 0) {
         currentPositionNext3 += 16.7;
         updateBlockPositionNext2();
      }
   } else {
      if (currentPositionNext3 < 0) {
         currentPositionNext3 += 18.5;
         updateBlockPositionNext3();
      }
   }
});

function handleResizeNext3() {
   if (window.innerWidth <= 990) {
      currentPositionNext3 = 0;
   } else {
      currentPositionNext3 = 0;
   }

   updateBlockPositionNext3();
}

window.addEventListener("load", handleResizeNext3);
window.addEventListener("resize", handleResizeNext3);
const card__inner = document.querySelectorAll(
   ".BlogCarousel__article-card-wrapper.BlogCarousel__card-wrapper.BlogCarousel__underline-links-hover"
);
card__inner.forEach(card__inner => {
   card__inner.addEventListener("click", () => {
      const link = card__inner.getAttribute("data-link");
      if (link) {
         window.location.href = link;
      }
   });
});
