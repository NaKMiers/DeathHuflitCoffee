document.addEventListener("DOMContentLoaded", function () {
   const checkboxes = document.querySelectorAll('input[type="checkbox"][name="filter"]');
   const selectedCount = document.querySelector(".facets__selected");
   const productItems = document.querySelectorAll(".list-menu__item.facets__item");

   checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", updateSelectedCount);
   });

   function updateSelectedCount() {
      const selectedCheckboxes = document.querySelectorAll(
         'input[type="checkbox"][name="filter"]:checked'
      );
      const selectedCheckboxesCount = selectedCheckboxes.length;

      selectedCount.textContent = `${selectedCheckboxesCount} selected`;

      productItems.forEach(function (item) {
         item.style.fontWeight = "normal";
      });
   }
});
$(document).ready(function () {
   // Chọn các thẻ <li> có class "grid__item scroll-trigger animate--slide-in"
   $(".Products__grid-item.Products__scroll-trigger.Products__animate--slide-in").click(
      function () {
         var link = $(this).data("link"); // Lấy đường link từ thuộc tính data-link của <li>
         window.location.href = link; // Chuyển hướng đến đường link khi nhấn vào <li>
      }
   );
});
document.addEventListener("DOMContentLoaded", function () {
   const baseUrl = "/collections/merch";
   const checkboxes = document.querySelectorAll(".Products__filterppproducttype");
   const productItems = document.querySelectorAll(".list-menu__item.facets__item");

   window.onload = function () {
      const urlParams = new URLSearchParams(window.location.search);

      // Lấy các giá trị trong tham số "filter" từ URL
      const filterValues = urlParams.getAll("filter");
      filterValues.forEach(value => {
         const checkbox = document.querySelector(
            `.Products__filterppproducttype[value="${value}"]`
         );
         if (checkbox) {
            checkbox.checked = true;
         }
      });

      // Lấy giá trị tham số "sort_by" từ URL và cập nhật dropdown
      const sortValue = urlParams.get("sort_by");
      if (sortValue) {
         sortSelect.value = sortValue;
      }

      // Kích hoạt các mục li tương ứng
      productItems.forEach(item => {
         const itemId = item.id; // Sử dụng id thay vì data-item-id
         if (filterValues.includes(itemId)) {
            item.classList.add("active");
         }
      });

      // Kích hoạt hoặc hủy kích hoạt các mục li khi người dùng nhấn vào chúng
      productItems.forEach(item => {
         item.addEventListener("click", () => {
            const itemId = item.id;
            const checkbox = document.querySelector(
               `.Products__filterppproducttype[value="${itemId}"]`
            );

            if (checkbox) {
               checkbox.checked = !checkbox.checked;
            }
         });
      });
   };

   checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", updateURL);
   });

   function updateURL() {
      const selectedTypes = [];
      checkboxes.forEach(checkbox => {
         if (checkbox.checked) {
            selectedTypes.push(checkbox.value);
         }
      });

      let finalUrl = baseUrl;
      if (selectedTypes.length > 0) {
         finalUrl += "?filter=" + selectedTypes.join("&filter=");
      }

      if (finalUrl === baseUrl) {
         // Nếu không có filter nào được chọn, trở về trang gốc
         finalUrl = baseUrl;
      } else {
         finalUrl += "&sort_by=" + sortSelect.value;
      }
      // Tải lại trang với URL mới
      window.location.href = finalUrl;
   }
});
document.addEventListener("DOMContentLoaded", function () {
   const baseUrl = "/collections/merch";
   const checkboxes = document.querySelectorAll(".Products__filterproducttype");
   const productItems = document.querySelectorAll(".Products__list-menu-item-facets-item");

   // Sử dụng Set để lưu trữ các giá trị đã chọn
   const selectedValues = new Set();

   function updateURL() {
      selectedValues.clear(); // Xóa các giá trị đã chọn trước đó

      checkboxes.forEach(checkbox => {
         if (checkbox.checked) {
            selectedValues.add(checkbox.getAttribute("data-custom-value"));
         }
      });

      let finalUrl = baseUrl;

      if (selectedValues.size > 0) {
         finalUrl += "?filter=" + Array.from(selectedValues).join("&filter=");
      }

      // Lấy giá trị tham số "sort_by" từ URL và cập nhật dropdown
      const urlParams = new URLSearchParams(window.location.search);
      const sortValue = urlParams.get("sort_by");

      if (sortValue) {
         finalUrl += "&sort_by=" + sortValue;
      } else {
         // Nếu không có tham số "sort_by", thêm nó vào URL với giá trị mặc định "manual"
         finalUrl += "&sort_by=manual";
      }
      if (selectedValues.size === 0) {
         // Nếu không có checkbox nào được chọn, trở về trang gốc
         finalUrl = baseUrl;
      }
      window.location.href = finalUrl;
   }

   checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", updateURL);
   });

   // Lấy trạng thái lưu trữ trong localStorage
   const storedState = localStorage.getItem("checkboxState");
   if (storedState) {
      const storedValues = storedState.split(",");
      checkboxes.forEach(checkbox => {
         if (storedValues.includes(checkbox.getAttribute("data-custom-value"))) {
            checkbox.checked = true;
         }
      });
   }

   // Lưu trạng thái khi checkbox thay đổi
   checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", () => {
         const checkedValues = Array.from(selectedValues);
         localStorage.setItem("checkboxState", checkedValues);
      });
   });
});
