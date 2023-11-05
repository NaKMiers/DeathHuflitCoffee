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
