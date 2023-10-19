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
   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
   const productItems = document.querySelectorAll(".list-menu__item.facets__item");

   window.onload = function () {
      const urlParams = new URLSearchParams(window.location.search);

      // Lấy các giá trị trong tham số "filter" từ URL
      const filterValues = urlParams.getAll("filter");
      filterValues.forEach(value => {
         const checkbox = document.querySelector(`input[type="checkbox"][value="${value}"]`);
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
         const itemId = item.getAttribute("data-item-id");
         if (filterValues.includes(itemId)) {
            item.classList.add("active");
         }
      });

      // Kích hoạt hoặc hủy kích hoạt các mục li khi người dùng nhấn vào chúng
      productItems.forEach(item => {
         item.addEventListener("click", () => {
            item.classList.toggle("active");
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

      const selectedItems = Array.from(productItems)
         .filter(item => item.classList.contains("active"))
         .map(item => item.getAttribute("data-item-id"));

      let finalUrl = baseUrl;
      if (selectedTypes.length > 0) {
         finalUrl += "?filter=" + selectedTypes.join("&filter=");
      }
      if (selectedItems.length > 0) {
         if (selectedTypes.length > 0) {
            finalUrl += "&";
         }
         finalUrl += selectedItems.map(itemId => `item=${itemId}`).join("&");
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

// Lấy tham chiếu đến select box
var sortSelect = document.getElementById("SortBy");

// Lắng nghe sự kiện khi giá trị trong select box thay đổi
sortSelect.addEventListener("change", function () {
   var selectedValue = sortSelect.value;

   // Lấy URL hiện tại
   var currentUrl = window.location.href;

   // Tạo một URL mới dựa trên URL hiện tại
   var url = new URL(currentUrl);

   // Thiết lập hoặc thay thế tham số "sort_by" trong URL
   url.searchParams.set("sort_by", selectedValue);

   // Điều hướng trình duyệt đến URL mới
   window.location.href = url.href;
});

// Sự kiện click trên chữ "Type" cũng gọi hàm toggleModal
document.querySelector(".Products__ads-button").addEventListener("click", toggleModal);
document
   .querySelector(".Products__twcss-text-body-16-twcss-font-fenomen")
   .addEventListener("click", toggleModal);
// Lấy thẻ chứa chữ "Type" và biểu tượng SVG
const typeButton = document.querySelector(".Products__ads-button");
// Thêm sự kiện click cho biểu tượng SVG
const typeIcon = typeButton.querySelector("svg.Products__icon-icon-caret");
typeIcon.addEventListener("click", function (event) {
   event.stopPropagation(); // Ngăn sự kiện click từ việc lan truyền lên thẻ chứa "Type"
   toggleModal(); // Gọi hàm toggleModal để mở hoặc đóng modal
});

// Lấy tất cả các checkbox
const checkboxes = document.querySelectorAll(
   'input[type="checkbox"][name="filter.p.product_type"]'
);

// Lấy thẻ span hiển thị số đã chọn
const selectedCount = document.querySelector(".facets__selected");

// Lắng nghe sự kiện thay đổi của checkbox
checkboxes.forEach(checkbox => {
   checkbox.addEventListener("change", updateSelectedCount);
});

// Hàm cập nhật số đã chọn
function updateSelectedCount() {
   const selectedCheckboxes = document.querySelectorAll(
      'input[type="checkbox"][name="filter.p.product_type"]:checked'
   );
   const selectedCheckboxesCount = selectedCheckboxes.length;

   // Cập nhật nội dung của thẻ span
   selectedCount.textContent = `${selectedCheckboxesCount} selected`;

   // Lưu trạng thái checkbox đã được chọn vào localStorage
   const selectedCheckboxesArray = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);
   localStorage.setItem("selectedCheckboxes", JSON.stringify(selectedCheckboxesArray));
}

// Hàm khôi phục trạng thái checkbox đã được chọn sau khi trang tải lại
function restoreSelectedCheckboxes() {
   const selectedCheckboxesArray = JSON.parse(localStorage.getItem("selectedCheckboxes"));
   if (selectedCheckboxesArray) {
      selectedCheckboxesArray.forEach(value => {
         const checkbox = document.querySelector(
            `input[type="checkbox"][name="filter.p.product_type"][value="${value}"]`
         );
         if (checkbox) {
            checkbox.checked = true;
         }
      });

      // Gọi hàm cập nhật số đã chọn
      updateSelectedCount();
   }
}

// Lắng nghe sự kiện tải lại trang
window.addEventListener("load", restoreSelectedCheckboxes);
