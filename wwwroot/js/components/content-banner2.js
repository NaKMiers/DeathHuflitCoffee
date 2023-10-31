// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', function() {
  // Tính toán giá trị padding dựa vào vị trí cuộn
  const scrollY = window.scrollY;
  const newPadding = 100 - (scrollY * 0.2); // Thay đổi 0.2 tùy theo tốc độ bạn muốn

  // Giới hạn giá trị padding tối thiểu và tối đa
  const minPadding = 20;
  const maxPadding = 100;

  // Áp dụng padding mới cho container
  const container = document.querySelector('.container');
  // container.style.padding = `${Math.max(minPadding, Math.min(maxPadding, newPadding))}px`;
});





