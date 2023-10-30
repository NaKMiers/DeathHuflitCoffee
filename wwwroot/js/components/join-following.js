$(document).ready(function () {
    let currentIndex = 0;
    const $joinList = $(".join-list");
    const totalItems = $joinList.length;
    const itemsToShow = 1; // Số lượng thẻ hiển thị mỗi lần

    function updateButtons() {
        if (currentIndex === 0) {
            $(".prev-button").hide();
        } else {
            $(".prev-button").show();
        }

        if (currentIndex + itemsToShow >= totalItems) {
            $(".next-button").hide();
        } else {
            $(".next-button").show();
        }
    }

    function showItems() {
        $joinList.hide().slice(currentIndex, currentIndex + itemsToShow).show();
        updateButtons();
    }

    showItems();

    $(".next-button").on('click', function () {
        currentIndex += itemsToShow;
        showItems();
    });

    $(".prev-button").on('click', function () {
        currentIndex -= itemsToShow;
        showItems();
    });
});