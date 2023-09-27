const buttons = document.querySelectorAll(".DirectionHeding__panel-4-crf-product-name");

buttons.forEach(button => {
   button.addEventListener("click", function () {
      button.classList.toggle("active");
   });
});
