const ritualRewardsBtn = document.querySelector('.ritual-rewards')
const ritualRewardsPanel = document.querySelector('.ritual-rewards__panel')
const ritualRewardsCloseBtn = document.querySelector('.ritual-rewards__close-panel-btn')
const ritualRewardsCloseBtnSub = document.querySelector('.ritual-rewards__close-panel-btn.sub')

const showRitualRewardsPanel = () => {
   ritualRewardsBtn.classList.add('show')

   ritualRewardsBtn.classList.add('active')
   ritualRewardsPanel.style.display = 'block'
   setTimeout(() => {
      ritualRewardsPanel.style.opacity = 1
   }, 0)
}

const hideRitualRewardsPanel = () => {
   ritualRewardsBtn.classList.remove('show')

   ritualRewardsBtn.classList.remove('active')
   ritualRewardsPanel.style.opacity = 0
   setTimeout(() => {
      ritualRewardsPanel.style.display = 'none'
   }, 510) // transition 0.5s
}

ritualRewardsBtn.onclick = () => {
   !ritualRewardsBtn.className.includes('show') ? showRitualRewardsPanel() : hideRitualRewardsPanel()
}

ritualRewardsCloseBtn.onclick = () => hideRitualRewardsPanel()
ritualRewardsCloseBtnSub.onclick = () => hideRitualRewardsPanel()

// scroll animation
const ritualRewardsBanner = document.querySelector('.ritual-rewards__panel__banner')
const ritualRewardsBannerOverlay = document.querySelector('.ritual-rewards__panel__banner__overlay')
const ritualRewardsHeader = document.querySelector('.ritual-rewards__panel__header')
const ritualRewardsContainer = document.querySelector('.ritual-rewards__panel__container')

let isShowHeader = false

const showHeader = () => {
   isShowHeader = true
   ritualRewardsHeader.style.display = 'flex'

   setTimeout(() => {
      ritualRewardsHeader.style.opacity = 1
   }, 0)
}

const hideHeader = () => {
   isShowHeader = false
   ritualRewardsHeader.style.opacity = 0

   setTimeout(() => {
      ritualRewardsHeader.style.display = 'none'
   }, 210)
}

ritualRewardsPanel.addEventListener('scroll', () => {
   const scrollTop = ritualRewardsPanel.scrollTop

   const opacity = scrollTop / 100

   const moveUp = -(scrollTop * 40) / 100

   if (scrollTop <= 100) {
      ritualRewardsBanner.style.transform = `translateY(${moveUp}px)`
   }

   if (opacity >= 0 && opacity <= 1) {
      ritualRewardsBannerOverlay.style.opacity = opacity
   }

   if (!isShowHeader && scrollTop >= 80) {
      showHeader()
   } else if (isShowHeader && scrollTop < 80) {
      hideHeader()
   }
})

// sub-panel way to earn
const ritualRewardsHeaderLogo = document.querySelector('.ritual-rewards__panel__header__logo')
const ritualRewardsHeaderBackIcon = document.querySelector('.ritual-rewards__panel__header__back-icon')

const ritualRewardsToEarnPanel = document.querySelector('.ritual-rewards__sub-panel.way-to-earn')
const wayToEarnTrigger = document.querySelector('.way-to-earn-trigger')

const showWayToEarnPanel = () => {
   // panel
   ritualRewardsPanel.style.overflowY = 'hidden'

   // header
   ritualRewardsHeaderLogo.style.display = 'none'
   ritualRewardsHeaderBackIcon.style.display = 'flex'

   // sub panel
   ritualRewardsToEarnPanel.style.display = 'block'
   setTimeout(() => {
      ritualRewardsToEarnPanel.style.opacity = 1
   }, 0)
}

const hideWayToEarnPanel = () => {
   // panel
   ritualRewardsPanel.style.overflowY = 'scroll'

   // header
   ritualRewardsHeaderBackIcon.style.display = 'none'
   setTimeout(() => {
      ritualRewardsHeaderLogo.style.display = 'block'
   }, 210) // logo transition 0.2s

   // sub panel
   ritualRewardsToEarnPanel.style.opacity = 0
   setTimeout(() => {
      ritualRewardsToEarnPanel.style.display = 'none'
   }, 310) // transition 0.3s
}

wayToEarnTrigger.onclick = () => {
   showWayToEarnPanel()
   showHeader()
}

// sub-panel way to redeem
const ritualRewardsToRedeemPanel = document.querySelector('.ritual-rewards__sub-panel.way-to-redeem')
const wayToRedeemTrigger = document.querySelector('.way-to-redeem-trigger')

const showWayToRedeemPanel = () => {
   // panel
   ritualRewardsPanel.style.overflowY = 'hidden'

   // header
   ritualRewardsHeaderLogo.style.display = 'none'
   ritualRewardsHeaderBackIcon.style.display = 'flex'

   // sub panel
   ritualRewardsToRedeemPanel.style.display = 'block'
   setTimeout(() => {
      ritualRewardsToRedeemPanel.style.opacity = 1
   }, 0)
}

const hideWayToRedeemPanel = () => {
   // panel
   ritualRewardsPanel.style.overflowY = 'scroll'

   // header
   ritualRewardsHeaderBackIcon.style.display = 'none'
   setTimeout(() => {
      ritualRewardsHeaderLogo.style.display = 'block'
   }, 210) // logo transition 0.2s

   // sub panel
   ritualRewardsToRedeemPanel.style.opacity = 0
   setTimeout(() => {
      ritualRewardsToRedeemPanel.style.display = 'none'
   }, 310) // transition 0.3s
}

wayToRedeemTrigger.onclick = () => {
   showWayToRedeemPanel()
   showHeader()
}

ritualRewardsHeaderBackIcon.onclick = () => {
   hideWayToEarnPanel()
   hideWayToRedeemPanel()
   hideHeader()
}

// // Lấy các phần tử div
// const divA = document.getElementById('KproductDetail_Size_a')
// const divB = document.getElementById('KproductDetail_Size_b')
// const divC = document.getElementById('KproductDetail_Size_c')

// // Sử dụng biến để theo dõi trạng thái của div A
// let isDivAClicked = false

// // Xử lý sự kiện khi click vào div A
// divA.addEventListener('click', function () {
//    if (!isDivAClicked) {
//       // Hiển thị div B và C khi div A chưa được click
//       divB.style.display = 'block'
//       divC.style.display = 'block'

//       // Đánh dấu div A đã được click
//       isDivAClicked = true
//    } else {
//       // Ẩn div B và C khi div A đã được click trước đó
//       divB.style.display = 'none'
//       divC.style.display = 'none'

//       // Bỏ đánh dấu div A
//       isDivAClicked = false
//    }

//    // Hiển thị lên là div đã chọn
//    divA.classList.add('selected')

//    // Loại bỏ lớp 'selected' cho các div khác nếu có
//    if (divB.classList.contains('selected')) {
//       divB.classList.remove('selected')
//    }
//    if (divC.classList.contains('selected')) {
//       divC.classList.remove('selected')
//    }
// })

// // Xử lý sự kiện khi click vào div B
// divB.addEventListener('click', function () {
//    if (!isDivAClicked) {
//       // Hiển thị div B và C khi div A chưa được click
//       divA.style.display = 'block'
//       divC.style.display = 'block'

//       // Đánh dấu div A đã được click
//       isDivAClicked = true
//    } else {
//       // Ẩn div B và C khi div A đã được click trước đó
//       divA.style.display = 'none'
//       divC.style.display = 'none'

//       // Bỏ đánh dấu div A
//       isDivAClicked = false
//    }

//    // Hiển thị lên là div đã chọn
//    divA.classList.add('selected')

//    // Loại bỏ lớp 'selected' cho các div khác nếu có
//    if (divA.classList.contains('selected')) {
//       divB.classList.remove('selected')
//    }
//    if (divC.classList.contains('selected')) {
//       divC.classList.remove('selected')
//    }
// })
// // Xử lý sự kiện khi click vào div C
// divC.addEventListener('click', function () {
//    if (!isDivAClicked) {
//       // Hiển thị div B và C khi div A chưa được click
//       divA.style.display = 'block'
//       divB.style.display = 'block'

//       // Đánh dấu div A đã được click
//       isDivAClicked = true
//    } else {
//       // Ẩn div B và C khi div A đã được click trước đó
//       divA.style.display = 'none'
//       divB.style.display = 'none'

//       // Bỏ đánh dấu div A
//       isDivAClicked = false
//    }

//    // Hiển thị lên là div đã chọn
//    divA.classList.add('selected')

//    // Loại bỏ lớp 'selected' cho các div khác nếu có
//    if (divA.classList.contains('selected')) {
//       divA.classList.remove('selected')
//    }
//    if (divB.classList.contains('selected')) {
//       divB.classList.remove('selected')
//    }
// })

// // Lấy các phần tử div
// const divX = document.getElementById('KproductDetail_Size_x')
// const divY = document.getElementById('KproductDetail_Size_y')

// // Sử dụng biến để theo dõi trạng thái của div A
// let isDivXClicked = false

// // Xử lý sự kiện khi click vào div A
// divX.addEventListener('click', function () {
//    if (!isDivXClicked) {
//       // Hiển thị div B và C khi div A chưa được click
//       divY.style.display = 'block'
//       // divC.style.display = 'block';

//       // Đánh dấu div A đã được click
//       isDivXClicked = true
//    } else {
//       // Ẩn div B và C khi div A đã được click trước đó
//       divY.style.display = 'none'
//       // divC.style.display = 'none';

//       // Bỏ đánh dấu div A
//       isDivXClicked = false
//    }

//    // Hiển thị lên là div đã chọn
//    divX.classList.add('selected')

//    // Loại bỏ lớp 'selected' cho các div khác nếu có
//    if (divY.classList.contains('selected')) {
//       divY.classList.remove('selected')
//    }
//    // if (divC.classList.contains('selected')) {
//    //   divC.classList.remove('selected');
//    // }
// })

// // Xử lý sự kiện khi click vào div B
// divY.addEventListener('click', function () {
//    if (!isDivXClicked) {
//       // Hiển thị div B và C khi div A chưa được click
//       divX.style.display = 'block'
//       // divC.style.display = 'block';

//       // Đánh dấu div A đã được click
//       isDivXClicked = true
//    } else {
//       // Ẩn div B và C khi div A đã được click trước đó
//       divX.style.display = 'none'
//       // divC.style.display = 'none';

//       // Bỏ đánh dấu div A
//       isDivXClicked = false
//    }

//    // Hiển thị lên là div đã chọn
//    divX.classList.add('selected')

//    // Loại bỏ lớp 'selected' cho các div khác nếu có
//    if (divX.classList.contains('selected')) {
//       divY.classList.remove('selected')
//    }
//    // if (divC.classList.contains('selected')) {
//    //   divC.classList.remove('selected');
//    // }
// })
