const card__inner = document.querySelectorAll(".DirectionHeding__panel-4-back-button");
card__inner.forEach(card__inner => {
   card__inner.addEventListener("click", () => {
      const link = card__inner.getAttribute("data-link");
      if (link) {
         window.location.href = link;
      }
   });
});
