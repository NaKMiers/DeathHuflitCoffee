const cartTrigger = document.querySelector('.cart-trigger')
const cardModal = document.querySelector('.cart-modal')

console.log(cardModal)

cartTrigger.onclick = () => {
   if (!cartTrigger.className.includes('show')) {
      cartTrigger.classList.add('show')
      cardModal.style.display = 'block'
      setTimeout(() => {
         cardModal.style.opacity = 1
      }, 0)
   } else {
      cardModal.style.opacity = 0
      cartTrigger.classList.remove('show')
      setTimeout(() => {
         cardModal.style.display = 'none'
      }, 210) // transition: 0.2s
   }
}
