$(document).ready(function () {
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
})

$(document).ready(function () {
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
})

$(document).ready(function () {
   // navside
   const navBarIcon = document.querySelector('.nav__icon.bar-icon')
   const navCloseIcon = document.querySelector('.nav__icon.close-icon')
   const navside = document.querySelector('.navside')
   const navsideBody = document.querySelector('.navside__body')
   let openingNavside = false

   const showNavside = () => {
      navBarIcon.style.display = 'none'
      navCloseIcon.style.display = 'block'

      navside.style.display = 'block'
      navsideBody.style.display = 'block'

      setTimeout(() => {
         navside.style.opacity = 1

         navsideBody.style.opacity = 1
         navsideBody.style.left = 0
      }, 0)
   }

   const hideNavside = () => {
      navBarIcon.style.display = 'block'
      navCloseIcon.style.display = 'none'

      navside.style.opacity = 0
      navsideBody.style.opacity = 0
      navsideBody.style.left = '-101%'

      setTimeout(() => {
         navsideBody.style.display = 'none'
         navside.style.display = 'none'
      }, 510) // transition 0.5s
   }

   navBarIcon.onclick = () => {
      if (!openingNavside) {
         showNavside()

         openingNavside = true
         setTimeout(() => {
            openingNavside = false
         }, 510)
      }
   }

   navCloseIcon.onclick = () => {
      if (!openingNavside) {
         hideNavside()

         openingNavside = true
         setTimeout(() => {
            openingNavside = false
         }, 510)
      }
   }

   // navside submenu coffee
   const navsideSubmenuCoffeeTrigger = document.querySelector('.navside__submenu-coffee__trigger')
   const navsideSubmenuCoffeeCloseBtn = document.querySelector('.navside__submenu-coffee__close-btn')
   const navsideSubmenuCoffee = document.querySelector('.navside__submenu.coffee')

   const showNavsideSubmenuCoffee = () => {
      navsideSubmenuCoffee.style.display = 'flex'
      setTimeout(() => {
         navsideSubmenuCoffee.style.right = 0
      }, 0)
   }

   const hideNavsideSubmenuCoffee = () => {
      navsideSubmenuCoffee.style.right = '-101%'
      setTimeout(() => {
         navsideSubmenuCoffee.style.display = 'none'
      }, 310) // transition: 0.3s
   }

   navsideSubmenuCoffeeTrigger.onclick = () => {
      showNavsideSubmenuCoffee()
   }

   navsideSubmenuCoffeeCloseBtn.onclick = () => {
      hideNavsideSubmenuCoffee()
   }

   // navside submenu merch
   const navsideSubmenuMerchTrigger = document.querySelector('.navside__submenu-merch__trigger')
   const navsideSubmenuMerchCloseBtn = document.querySelector('.navside__submenu-merch__close-btn')
   const navsideSubmenuMerch = document.querySelector('.navside__submenu.merch')

   const showNavsideSubmenuMerch = () => {
      navsideSubmenuMerch.style.display = 'flex'
      setTimeout(() => {
         navsideSubmenuMerch.style.right = 0
      }, 0)
   }

   const hideNavsideSubmenuMerch = () => {
      navsideSubmenuMerch.style.right = '-101%'
      setTimeout(() => {
         navsideSubmenuMerch.style.display = 'none'
      }, 310) // transition: 0.3s
   }

   navsideSubmenuMerchTrigger.onclick = () => {
      showNavsideSubmenuMerch()
   }

   navsideSubmenuMerchCloseBtn.onclick = () => {
      hideNavsideSubmenuMerch()
   }
})

$(document).ready(function () {
   // recomment product
   $('.cart-modal__product-item__body__add-btn').click(function () {
      // Hiển thị select menu của form được nhấn
      $(this).closest('.cart-modal__product-item').find('.cart-modal__product-item__selector').show()

      setTimeout(() => {
         $(this).attr('type', 'submit')
      }, 0)
   })
})

$(document).ready(function () {
   const plusCartBtn = $('.cart__quantity-btn.increase')
   const minusCartBtn = $('.cart__quantity-btn.decrease')
   const totalBox = $('.cart__total')

   const calcNewPrice = (cartItemId, newQuantity) => {
      const price = myCartData.find(cartItem => cartItem.Id === cartItemId).Price
      const newPrice = price * newQuantity
      return newPrice
   }

   plusCartBtn.click(function () {
      const quantityWrap = $(this).closest(
         '.cart-modal__product-no-empty-body__content__amount__btn-wraper'
      )
      const cartItemId = quantityWrap.data('cart-item-id')
      const quantityCartBox = quantityWrap.find(
         '.cart-modal__product-no-empty-body__content__amount__amount-show'
      )
      const subtotalBox = quantityWrap
         .closest('.cart-modal__product-no-empty-body__content__amount')
         .find('.cart-modal__product-no-empty-body__content__amount__price')

      $.ajax({
         method: 'POST',
         url: `/cart/increase/${cartItemId}`,
         success: function (data) {
            // update showing quantity
            quantityCartBox.text(data.newQuantity)

            // update showing subtotal
            const newPrice = calcNewPrice(cartItemId, data.newQuantity)
            subtotalBox.text('$' + newPrice.toFixed(2))

            // update showing total
            let total = 0
            const subTotalBoxs = $('.cart-modal__product-no-empty-body__content__amount__price')
            subTotalBoxs.each(function () {
               // console.log($(this).text())
               total += parseFloat($(this).text().replace('$', ''))
            })
            totalBox.text('$' + total.toFixed(2))
         },

         error: function (err) {
            console.log(err)
         },
      })
   })

   minusCartBtn.click(function () {
      const quantityWrap = $(this).closest(
         '.cart-modal__product-no-empty-body__content__amount__btn-wraper'
      )
      const cartItemId = quantityWrap.data('cart-item-id')
      const quantityCartBox = quantityWrap.find(
         '.cart-modal__product-no-empty-body__content__amount__amount-show'
      )
      const subtotalBox = quantityWrap
         .closest('.cart-modal__product-no-empty-body__content__amount')
         .find('.cart-modal__product-no-empty-body__content__amount__price')

      // prevent case the quantity = 0
      if (+quantityCartBox.text().trim() - 1 > 0) {
         $.ajax({
            method: 'POST',
            url: `/cart/decrease/${cartItemId}`,
            success: function (data) {
               // update showing quantity
               quantityCartBox.text(data.newQuantity)

               // update showing subtotal
               const newPrice = calcNewPrice(cartItemId, data.newQuantity)
               subtotalBox.text('$' + newPrice.toFixed(2))

               // update showing total
               let total = 0
               const subTotalBoxs = $('.cart-modal__product-no-empty-body__content__amount__price')
               subTotalBoxs.each(function () {
                  // console.log($(this).text())
                  total += parseFloat($(this).text().replace('$', ''))
               })
               totalBox.text('$' + total.toFixed(2))
            },

            error: function (err) {
               console.log(err)
            },
         })
      }
   })
})
