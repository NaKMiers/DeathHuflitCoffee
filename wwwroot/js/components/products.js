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

      // selectedCheckboxes.forEach(function (selected) {
      //    const label = selected.closest("label");
      //    label.style.fontWeight = "bold";
      // });
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

// const baseUrl = "/collections/merch";
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// checkboxes.forEach(checkbox => {
//    checkbox.addEventListener("change", updateURL);
// });

// function updateURL() {
//    const selectedTypes = [];
//    checkboxes.forEach(checkbox => {
//       if (checkbox.checked) {
//          selectedTypes.push(checkbox.value);
//       }
//    });

//    const sortSelect = document.getElementById("SortBy");
//    const selectedValue = sortSelect.value;

//    let finalUrl = baseUrl;
//    if (selectedTypes.length > 0) {
//       finalUrl += "?filter=" + selectedTypes.join("&filter=");
//    }

//    finalUrl += "&sort_by=" + selectedValue;

//    history.pushState(null, "", finalUrl);
// }

// const baseUrl = "/collections/merch";
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// const productItems = document.querySelectorAll(".list-menu__item.facets__item");

// checkboxes.forEach(checkbox => {
//    checkbox.addEventListener("change", updateURL);
// });

// productItems.forEach(item => {
//    item.addEventListener("click", updateURL);
// });

// function updateURL() {
//    const selectedTypes = [];
//    checkboxes.forEach(checkbox => {
//       if (checkbox.checked) {
//          selectedTypes.push(checkbox.value);
//       }
//    });

//    const sortSelect = document.getElementById("SortBy");
//    const selectedValue = sortSelect.value;

//    let finalUrl = baseUrl;
//    if (selectedTypes.length > 0) {
//       finalUrl += "?filter=" + selectedTypes.join("&filter=");
//    }

//    finalUrl += "&sort_by=" + selectedValue;

//    // Điều hướng đến URL mới
//    window.location.href = finalUrl;
// }

const baseUrl = "/collections/merch";

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const productItems = document.querySelectorAll(".list-menu__item.facets__item");

checkboxes.forEach(checkbox => {
   checkbox.addEventListener("change", updateURL);
});

productItems.forEach(item => {
   item.addEventListener("click", () => {
      updateURL();
   });
});

function updateURL() {
   const selectedTypes = [];
   checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
         selectedTypes.push(checkbox.value);
      }
   });

   const sortSelect = document.getElementById("SortBy");
   const selectedValue = sortSelect.value;

   let finalUrl = baseUrl;
   if (selectedTypes.length > 0) {
      finalUrl += "?filter=" + selectedTypes.join("&filter=") + "&";
   }

   finalUrl += "sort_by=" + selectedValue;

   // Điều hướng đến URL mới
   window.location.href = finalUrl;
}

// // Lấy tham chiếu đến select box
// var sortSelect = document.getElementById("SortBy");

// // Lắng nghe sự kiện khi giá trị trong select box thay đổi
// sortSelect.addEventListener("change", function () {
//    var selectedValue = sortSelect.value;
//    var baseUrl = "/collections/merch";

//    // Tạo URL mới dựa trên giá trị đã chọn
//    var finalUrl = baseUrl + "?sort_by=" + selectedValue;

//    // Cập nhật URL mà không tải lại trang
//    history.pushState(null, "", finalUrl);
// });

// Lấy tham chiếu đến select box
var sortSelect = document.getElementById("SortBy");

// Lắng nghe sự kiện khi giá trị trong select box thay đổi
sortSelect.addEventListener("change", function () {
   var selectedValue = sortSelect.value;
   var baseUrl = "/collections/merch";

   // Tạo URL mới dựa trên giá trị đã chọn
   var finalUrl = baseUrl + "?sort_by=" + selectedValue;

   // Tạo một biến form để submit dữ liệu
   var form = document.getElementById("myForm");
   form.action = finalUrl;
   form.submit();
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
