// Variables with the query selectors
const $shoppingButton = document.querySelector('.shopping-cart-link')
const $cartContainer = document.querySelector('.shopping-cart-container')
const $leftArrowButton = document.querySelector('.left-arrow')

// When the user click the shopping cart button show the shopping details
$shoppingButton.addEventListener('click', () => {
  openCartDetails()
})

const openCartDetails = () => {
  $cartContainer.classList.toggle('show-cart-container')
}

$leftArrowButton.addEventListener('click', () => {
  openCartDetails()
})
