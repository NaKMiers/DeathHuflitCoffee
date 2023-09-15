# DeathWishCoffee - ASP.NET Project for WEB SUBJECT (HUFLIT)

# Yêu cầu trước khi thực hiện project

1. Follow @NaKMiers on github
2. Dùng VS Code
3. Tải .Net Core 7
4. Có kiến thức cơ bản về Git Github
5. Tải bộ Extentions VS Code sau đây: (...)

# Phân công Project

--- Project được phân công theo component (thành phần) thay vì từng trang: + Để tránh lặp code + Đảm bảo công bằng về khối lượng công việc

### Phân công cụ thể

1. -  so easy 🤣
2. -  quite easy 😁
3. -  easy 😃
4. -  not too hard 😗
5. -  quite hard 😅
6. -  🙂
7. -  .....

### Khoa - 23

-  6 Header 🙂
-  3 Footer 😃
-  2 SignUp 😁
-  4 RitualRewards 😗
-  2 Hero 😁
-  1 ContentBanner 🤣
-  1 Title 🤣
-  4 Carousel1 😗

### Quân - 25

-  2 ContentBanner 😁
-  2 Cards 😁
-  4 Slideshow 😗
-  3 JoinFollowing 😃
-  1 BigTitle 🤣
-  2 CardContent 😁
-  2 Incentives 😁
-  4 Features 😗

### Lân - 25

-  7 Products 🤬🤬🤬🤬
-  1 DirectionHeading 🤣
-  2 ContentBanner3 😁
-  4 TiktokCards 😗
-  4 BlogCarousel 😗
-  2 ContentBanner4 😁
-  2 Icons 😁
-  1 BigTitle2 🤣

### Kha - 25

-  3 SlitContent 😃
-  4 Timeline 😗
-  3 Login 😃
-  3 Register 😃
-  4 Account 😗
-  5 ProductDetail 😅

### Tiến - 23

-  3 SplitContent2 😃
-  4 RelatedProducts 😗
-  5 Reviews 😅
-  3 SearchResult 😃
-  1 BlogBanner 🤣
-  3 BlogContent 😃
-  2 ContentBanner5 😁

# Trình tự làm việc

## 1. Trước khi code

-  Kiểm tra code của mình đã update lại chưa
-  Tạo branch mới bằng git branch: git branch Khoa_Header
-  Chuyển sang nhánh mới: git checkout Khoa_Header
-  Tạo và chuyển cùng lúc: git checkout -b Khoa_Header
-  **\_\_\_\_**TUYỆT ĐỐI KHÔNG ĐƯỢC CODE TRÊN NHÁNH MAIN**\_\_\_\_**

#

## 2. Trong khi code

-  Tạo component mới trong thư mục components
-  Tên component phải viết hoa chữ cái đầu, có đuôi .cshtml: Header.cshtml
-  Add component vào trang web
   -  Vào trang chứa component đó trên CHROME (bắt buộc dùng chrome): http://localhost:..../products
   -  Add component vào trang trong source code: @Html.Partial("...đường_dẫn_tới_component...")
-  Tạo .css của cpn đó trong thư wwwroot/css/components: www/root/css/components/header.css
-  Tên file css viết thường
-  Link file css vào View/Share/\_Layout.cshtml để kích hoạt css
-  \_**\_ĐẶT TÊN CLASS CSS PHẢI TUÂN THEO QUY TẮC BEM\_\_\_** để không bị ghi đè css

-  Tạo .js của cpn đó trong thư wwwroot/js/components: www/root/css/components/header.js
-  Tên file js viết thường
-  Link file js vào View/Share/\_Layout.cshtml để kích hoạt js

#

## 3. Sau khi code một component cụ thể

-  Kiểm tra lại branch hiện tại: git branch
-  Xác nhận thay đổi: git add .
-  Để lại lời nhắn: git commit -m "Hoan thanh component Header"
-  Up code lên Github: git push origin Khoa_Header
-  Lên Github của chính mình để tạo Pull Request và mô tả chi tiết thay đôi
-  Những thành viên còn lại vào kiểm tra và xác nhận gọp nhánh mới vào nhánh main

#

## 4. Sau khi gọp code vào main

-  Những thành viên còn lại update lại của của mình trên máy:
-  Chuyển sang nhánh main: git checkout main
-  Update lại code trên nhánh main: git pull
