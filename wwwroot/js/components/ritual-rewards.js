const ritualRewardsBtn = document.querySelector('.ritual-rewards')
const ritualRewardsPanel = document.querySelector('.ritual-rewards__panel')
const ritualRewardsCloseBtn = document.querySelector('.ritual-rewards__close-panel-btn')

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
