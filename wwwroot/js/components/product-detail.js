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
