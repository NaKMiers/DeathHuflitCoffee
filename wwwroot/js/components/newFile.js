starContainers.forEach(starContainer => {
   starContainer.addEventListener('click', () => {
      const rating = starContainer.getAttribute('data-rating')
      ratingTexts.forEach(text => (text.style.display = 'none'))
      const selectedText = document.querySelector(`.rating-text span[data-rating="${rating}"]`)
      selectedText.style.display = 'inline'
   })
})
