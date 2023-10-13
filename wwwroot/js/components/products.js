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
$(document).ready(function () {
   // Chọn các thẻ <li> có class "grid__item scroll-trigger animate--slide-in"
   $(".grid__item.scroll-trigger.animate--slide-in").click(function () {
      var link = $(this).data("link"); // Lấy đường link từ thuộc tính data-link của <li>
      window.location.href = link; // Chuyển hướng đến đường link khi nhấn vào <li>
   });
});

document.addEventListener("DOMContentLoaded", function () {
   var lis = document.querySelectorAll(".list-menu__item");

   lis.forEach(function (li) {
      li.addEventListener("click", function () {
         // Lấy văn bản của mục li đã chọn
         var selectedText = li.textContent;

         // Thêm giá trị đã chọn vào trường tên "selected_item" của form
         var form = document.querySelector("form");
         var input = document.createElement("input");
         input.type = "hidden";
         input.name = "selected_item";
         input.value = selectedText;
         form.appendChild(input);

         // Gửi form bằng phương thức "get"
         form.submit();
      });
   });
});

document.addEventListener("DOMContentLoaded", function () {
   var selectElement = document.getElementById("SortBy");
   var form = document.getElementById("myForm");

   selectElement.addEventListener("change", function () {
      // Submit form khi giá trị thay đổi
      form.submit();
   });
});
