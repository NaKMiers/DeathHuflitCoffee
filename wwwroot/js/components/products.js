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

// Lấy tham chiếu đến select box
var productssortSelect = document.getElementById("Products__SortBy");

// Lắng nghe sự kiện khi giá trị trong select box thay đổi
productssortSelect.addEventListener("change", function () {
   var productselectedValue = productssortSelect.value;

   // Lấy URL hiện tại
   var productscurrentUrl = window.location.href;

   // Tạo một URL mới dựa trên URL hiện tại
   var productsurl = new URL(productscurrentUrl);

   // Thiết lập hoặc thay thế tham số "sort_by" trong URL
   productsurl.searchParams.set("sort_by", productselectedValue);

   // Điều hướng trình duyệt đến URL mới
   window.location.href = productsurl.href;
});

// Kiểm tra nếu có tham số "sort_by" trong URL
var currentParams = new URLSearchParams(window.location.search);
if (currentParams.has("sort_by")) {
   // Lấy giá trị "sort_by" từ URL
   var selectedSortBy = currentParams.get("sort_by");

   // Đặt giá trị của select box bằng giá trị từ URL
   productssortSelect.value = selectedSortBy;
}

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
// Lấy thẻ SVG bằng cách sử dụng class "Products__icon-icon-close"
const svgElement = document.querySelector(".Products__icon-icon-close");

// Lấy thẻ div bằng cách sử dụng id "Products__Facet-1-template-14567496974391-grid"
const divElement = document.querySelector("#Products__Facet-1-template-14567496974391-grid");
const divElementon = document.querySelector("#Products__hiddenbox-facet-template");
// Thêm sự kiện click vào thẻ SVG
svgElement.addEventListener("click", function () {
   // Khi SVG được nhấn, đặt thuộc tính display của thẻ div thành "none"
   divElement.style.display = "none";
   divElementon.style.display = "none";
});
const spanElement = document.querySelector(
   ".Products__twcss-text-body-16-twcss-font-fenomen-hidden-facet-template"
);
const svgElementon = document.querySelector(".Products__icon-icon-filter");
spanElement.addEventListener("click", function () {
   // Khi span được nhấn, đặt thuộc tính display của cả hai thẻ div thành "block" để hiển thị chúng
   divElement.style.display = "block";
   divElementon.style.display = "block";
});
svgElementon.addEventListener("click", function () {
   // Khi span được nhấn, đặt thuộc tính display của cả hai thẻ div thành "block" để hiển thị chúng
   divElement.style.display = "block";
   divElementon.style.display = "block";
});
