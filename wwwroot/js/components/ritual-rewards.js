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
