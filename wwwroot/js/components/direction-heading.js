const buttons = document.querySelectorAll(".panel_4_crf_product_name");

buttons.forEach(button => {
   button.addEventListener("click", function () {
      button.classList.toggle("active");
   });
});
