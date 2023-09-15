// cart-modal
const cartTrigger = document.querySelector('.cart-trigger')
const cardModal = document.querySelector('.cart-modal')
const cartModalContainer = document.querySelector('.cart-modal__container')
const closeCartModalBtn = document.querySelector('.cart-modal__close-btn')

const showCart = () => {
   cartTrigger.classList.add('show')
   cardModal.style.display = 'block'
   setTimeout(() => {
      cardModal.style.opacity = 1
      cartModalContainer.style.transform = 'translateX(0)'
      cartModalContainer.style.opacity = 1
   }, 0)
}

const hideCart = () => {
   cardModal.style.opacity = 0
   cartModalContainer.style.transform = 'translateX(101%)'
   cartModalContainer.style.opacity = 0
   cartTrigger.classList.remove('show')
   setTimeout(() => {
      cardModal.style.display = 'none'
   }, 510) // transition: 0.5s
}

cartTrigger.onclick = () => {
   !cartTrigger.className.includes('show') ? showCart() : hideCart()
}

closeCartModalBtn.onclick = () => {
   hideCart()
}

cardModal.onclick = e => {
   if (cartModalContainer && !cartModalContainer.contains(e.target)) {
      hideCart()
   }
}

// sub-menu coffee
const subMenuCoffeeTrigger = document.querySelector('.sub-menu-coffee-trigger')
const subMenuCoffee = document.querySelector('.sub-menu.coffee')

const showSubMenuCoffee = () => {
   subMenuCoffee.style.display = 'block'
   setTimeout(() => {
      subMenuCoffee.style.opacity = 1
      subMenuCoffee.style.transform = 'translateY(0)'
   }, 0)
}

const hideSubMenuCoffee = () => {
   subMenuCoffee.style.opacity = 0
   subMenuCoffee.style.transform = 'translateY(-101%)'
   setTimeout(() => {
      subMenuCoffee.style.display = 'none'
   }, 510) // transition: 0.5s
}

subMenuCoffeeTrigger.onmouseover = () => {
   showSubMenuCoffee()

   // hideSubMenuMerch
   hideSubMenuMerch()
}

subMenuCoffee.onmouseleave = () => {
   hideSubMenuCoffee()
}

// sub-menu merch
const subMenuMerchTrigger = document.querySelector('.sub-menu-merch-trigger')
const subMenuMerch = document.querySelector('.sub-menu.merch')

const showSubMenuMerch = () => {
   subMenuMerch.style.display = 'block'
   setTimeout(() => {
      subMenuMerch.style.opacity = 1
      subMenuMerch.style.transform = 'translateY(0)'
   }, 0)
}

const hideSubMenuMerch = () => {
   subMenuMerch.style.opacity = 0
   subMenuMerch.style.transform = 'translateY(-101%)'
   setTimeout(() => {
      subMenuMerch.style.display = 'none'
   }, 510) // transition: 0.5s
}

subMenuMerchTrigger.onmouseover = () => {
   showSubMenuMerch()

   // hideSubMenuCoffee
   hideSubMenuCoffee()
}

subMenuMerch.onmouseleave = () => {
   hideSubMenuMerch()
}
