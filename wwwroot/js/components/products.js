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
   $(".Products__grid-item.Products__scroll-trigger.Products__animate--slide-in").click(
      function () {
         var link = $(this).data("link"); // Lấy đường link từ thuộc tính data-link của <li>
         window.location.href = link; // Chuyển hướng đến đường link khi nhấn vào <li>
      }
   );
});

const baseUrl = "/collections/merch?";
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

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

   const sortSelect = document.getElementById("SortBy");
   const selectedValue = sortSelect.value;

   let finalUrl = baseUrl;
   if (selectedTypes.length > 0) {
      finalUrl += "filter=" + selectedTypes.join("&filter=") + "&";
   }

   finalUrl += "sort_by=" + selectedValue;

   history.pushState(null, "", finalUrl);
}
// Lấy tham chiếu đến select box
var sortSelect = document.getElementById("SortBy");

// Lắng nghe sự kiện khi giá trị trong select box thay đổi
sortSelect.addEventListener("change", function () {
   var selectedValue = sortSelect.value;
   var baseUrl = "/collections/merch";

   // Tạo URL mới dựa trên giá trị đã chọn
   var finalUrl = baseUrl + "?sort_by=" + selectedValue;

   // Cập nhật URL mà không tải lại trang
   history.pushState(null, "", finalUrl);
});

// Lấy tất cả các liên kết "Remove filter"
const removeLinks = document.querySelectorAll(
   ".Products__active-facets-button-inner-twcss-text-body-12-twcss-font-fenomen"
);

removeLinks.forEach(link => {
   link.addEventListener("click", removeFilter);
});

function removeFilter(event) {
   event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết

   // Lấy tham số từ thuộc tính dữ liệu "data-filter-url"
   const filterURL = event.currentTarget.getAttribute("data-filter-url");

   // Lấy URL hiện tại của trang
   const currentURL = window.location.href;

   // Kiểm tra nếu filterURL tồn tại trong URL, sau đó xóa nó
   if (currentURL.includes(filterURL)) {
      const modifiedURL = currentURL.replace(filterURL, "");

      // Thay đổi URL của trang thành modifiedURL
      history.pushState(null, "", modifiedURL);
   }
}

// // Lấy tất cả các mục <li> chứa Accessories
// const accessoriesItems = document.querySelectorAll(".list-menu__item.facets__item");

// // Lấy tất cả các mục "Remove filter"
// const removeButtons = document.querySelectorAll(
//    ".Products__active-facets-button-inner-twcss-text-body-12-twcss-font-fenomen"
// );

// accessoriesItems.forEach((item, index) => {
//    const removeButton = removeButtons[index];

//    item.addEventListener("click", () => {
//       // Đảo ngược trạng thái hiển thị của nút "Remove filter"
//       if (removeButton.style.display === "none") {
//          removeButton.style.display = "block";
//       } else {
//          removeButton.style.display = "none";
//       }
//    });
// });
