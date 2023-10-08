document.addEventListener("DOMContentLoaded", function () {
   const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name="filter.p.product_type"]'
   );
   const selectedCount = document.querySelector(".facets__selected");
   const productItems = document.querySelectorAll(".list-menu__item.facets__item");

   checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", updateSelectedCount);
   });

   function updateSelectedCount() {
      const selectedCheckboxes = document.querySelectorAll(
         'input[type="checkbox"][name="filter.p.product_type"]:checked'
      );
      const selectedCheckboxesCount = selectedCheckboxes.length;

      selectedCount.textContent = `${selectedCheckboxesCount} selected`;

      productItems.forEach(function (item) {
         item.style.fontWeight = "normal";
      });

      // selectedCheckboxes.forEach(function (selected) {
      //    const label = selected.closest("label");
      //    label.style.fontWeight = "bold";
      // });
   }
});
