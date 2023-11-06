<<<<<<< HEAD
// Lấy các phần tử div
const divA = document.getElementById('KproductDetail_Size_a')
const divB = document.getElementById('KproductDetail_Size_b')
const divC = document.getElementById('KproductDetail_Size_c')

// Sử dụng biến để theo dõi trạng thái của div A
let isDivAClicked = false

// Xử lý sự kiện khi click vào div A
divA.addEventListener('click', function () {
   if (!isDivAClicked) {
      // Hiển thị div B và C khi div A chưa được click
      divB.style.display = 'block'
      divC.style.display = 'block'

      // Đánh dấu div A đã được click
      isDivAClicked = true
   } else {
      // Ẩn div B và C khi div A đã được click trước đó
      divB.style.display = 'none'
      divC.style.display = 'none'

      // Bỏ đánh dấu div A
      isDivAClicked = false
   }

   // Hiển thị lên là div đã chọn
   divA.classList.add('selected')

   // Loại bỏ lớp 'selected' cho các div khác nếu có
   if (divB.classList.contains('selected')) {
      divB.classList.remove('selected')
   }
   if (divC.classList.contains('selected')) {
      divC.classList.remove('selected')
   }
})

// Xử lý sự kiện khi click vào div B
divB.addEventListener('click', function () {
   if (!isDivAClicked) {
      // Hiển thị div B và C khi div A chưa được click
      divA.style.display = 'block'
      divC.style.display = 'block'

      // Đánh dấu div A đã được click
      isDivAClicked = true
   } else {
      // Ẩn div B và C khi div A đã được click trước đó
      divA.style.display = 'none'
      divC.style.display = 'none'

      // Bỏ đánh dấu div A
      isDivAClicked = false
   }

   // Hiển thị lên là div đã chọn
   divA.classList.add('selected')

   // Loại bỏ lớp 'selected' cho các div khác nếu có
   if (divA.classList.contains('selected')) {
      divB.classList.remove('selected')
   }
   if (divC.classList.contains('selected')) {
      divC.classList.remove('selected')
   }
})
// Xử lý sự kiện khi click vào div C
divC.addEventListener('click', function () {
   if (!isDivAClicked) {
      // Hiển thị div B và C khi div A chưa được click
      divA.style.display = 'block'
      divB.style.display = 'block'

      // Đánh dấu div A đã được click
      isDivAClicked = true
   } else {
      // Ẩn div B và C khi div A đã được click trước đó
      divA.style.display = 'none'
      divB.style.display = 'none'

      // Bỏ đánh dấu div A
      isDivAClicked = false
   }

   // Hiển thị lên là div đã chọn
   divA.classList.add('selected')

   // Loại bỏ lớp 'selected' cho các div khác nếu có
   if (divA.classList.contains('selected')) {
      divA.classList.remove('selected')
   }
   if (divB.classList.contains('selected')) {
      divB.classList.remove('selected')
   }
})

// Lấy các phần tử div
const divX = document.getElementById('KproductDetail_Size_x')
const divY = document.getElementById('KproductDetail_Size_y')

// Sử dụng biến để theo dõi trạng thái của div A
let isDivXClicked = false

// Xử lý sự kiện khi click vào div A
divX.addEventListener('click', function () {
   if (!isDivXClicked) {
      // Hiển thị div B và C khi div A chưa được click
      divY.style.display = 'block'
      // divC.style.display = 'block';

      // Đánh dấu div A đã được click
      isDivXClicked = true
   } else {
      // Ẩn div B và C khi div A đã được click trước đó
      divY.style.display = 'none'
      // divC.style.display = 'none';

      // Bỏ đánh dấu div A
      isDivXClicked = false
   }

   // Hiển thị lên là div đã chọn
   divX.classList.add('selected')

   // Loại bỏ lớp 'selected' cho các div khác nếu có
   if (divY.classList.contains('selected')) {
      divY.classList.remove('selected')
   }
   // if (divC.classList.contains('selected')) {
   //   divC.classList.remove('selected');
   // }
})

// Xử lý sự kiện khi click vào div B
divY.addEventListener('click', function () {
   if (!isDivXClicked) {
      // Hiển thị div B và C khi div A chưa được click
      divX.style.display = 'block'
      // divC.style.display = 'block';

      // Đánh dấu div A đã được click
      isDivXClicked = true
   } else {
      // Ẩn div B và C khi div A đã được click trước đó
      divX.style.display = 'none'
      // divC.style.display = 'none';

      // Bỏ đánh dấu div A
      isDivXClicked = false
   }

   // Hiển thị lên là div đã chọn
   divX.classList.add('selected')

   // Loại bỏ lớp 'selected' cho các div khác nếu có
   if (divX.classList.contains('selected')) {
      divY.classList.remove('selected')
   }
   // if (divC.classList.contains('selected')) {
   //   divC.classList.remove('selected');
   // }
})
=======
const KproductDetail__main__text__size = document.querySelector(".KproductDetail__main__text__size");
const KproductDetail__main__text__size__choice = document.querySelector(".KproductDetail__main__text__size__choice");
const KproductDetail__main__text__size__choice__text = KproductDetail__main__text__size__choice.querySelectorAll('.KproductDetail__main__text__size__choice__text');

// Lưu tất cả các giá trị trong .KproductDetail__main__text__size__choice__text vào mảng textValues
const textValues = [];
KproductDetail__main__text__size__choice__text.forEach(item => {
    textValues.push(item.innerHTML);
});

// Biến để theo dõi trạng thái hiển thị của lựa chọn
let choiceVisible = false;

// Gán sự kiện click cho .KproductDetail__main__text__size
KproductDetail__main__text__size.addEventListener('click', () => {
    if (!choiceVisible) {
        KproductDetail__main__text__size__choice.style.display = 'flex';
        choiceVisible = true;
    } else {
        KproductDetail__main__text__size__choice.style.display = 'none';
        choiceVisible = false;
    }
});

// Gán sự kiện click cho mỗi div trong .KproductDetail__main__text__size__choice__text
KproductDetail__main__text__size__choice__text.forEach(item => {
    item.addEventListener('click', () => {
        const selectedValue = item.innerHTML;
        const mainContent = document.createElement('div');
        mainContent.className = 'main';
        mainContent.style.display = 'inline-block';
        // mainContent.style.border = '1.5px solid white';
        mainContent.innerHTML = selectedValue;
        KproductDetail__main__text__size.innerHTML = ''; // Xóa nội dung hiện tại của .KproductDetail__main__text__size
        KproductDetail__main__text__size.appendChild(mainContent);
        KproductDetail__main__text__size__choice.style.display = 'none';
        choiceVisible = false;
    });
});

// type
const mainnElement = document.querySelector('.KproductDetail__main__text__size2 .KproductDetail__main__text__size__mainn2');
const choiceElements = document.querySelectorAll('.KproductDetail__main__text__size__choice__p2');

let choiceVisible2 = false;

mainnElement.addEventListener('click', () => {
    if (!choiceVisible) {
        document.querySelector('.KproductDetail__main__text__size__choice2').style.display = 'flex';
        choiceVisible = true;
    } else {
        document.querySelector('.KproductDetail__main__text__size__choice2').style.display = 'none';
        choiceVisible = false;
    }
});

choiceElements.forEach(item => {
    item.addEventListener('click', () => {
        const selectedValue = item.querySelector('.KproductDetail_Size_p2').innerHTML;
        mainnElement.innerHTML = `<p>${selectedValue}</p>`;
        document.querySelector('.KproductDetail__main__text__size__choice2').style.display = 'none';
        choiceVisible = false;
    });
});
>>>>>>> origin/Kha-SplitConten1
