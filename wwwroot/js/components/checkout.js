const discountInput = document.querySelector('.checkout__main__form__input.discount input')
const applyDiscountBtn = document.querySelector('.checkout__discount__btn')

discountInput.onkeyup = e => {
   // console.log(e.target.value)
   if (e.target.value) {
      applyDiscountBtn.classList.remove('disabled')
   } else {
      applyDiscountBtn.classList.add('disabled')
   }
}
