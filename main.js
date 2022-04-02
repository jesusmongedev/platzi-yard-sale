// Variables with the query selectors
const $shoppingButton = document.querySelector('.shopping-cart-link')
const $cartContainer = document.querySelector('.shopping-cart-container')
const $leftArrowButton = document.querySelector('.left-arrow')
const $produtCard = document.querySelectorAll('.product-card')
const $mobileMenuIcon = document.querySelector('.header__menu-icon')
const $mobileMenu = document.querySelector('.menu-mobile')

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

// Show mobile menu when clicked
const showMobileMenu = () => {
  console.log('first')
  $mobileMenu.classList.toggle('menu-mobile--show')
}

$mobileMenuIcon.addEventListener('click', () => {
  showMobileMenu()
})

// Change Icon source img when the click it
$produtCard.forEach((e) => {
  let $addToCartIcon = e.querySelector('.cart-icon-img')
  $addToCartIcon.addEventListener('click', () => changeShoppingCartStatus(e))
  function changeShoppingCartStatus(e) {
    let $removedFromCart = e.querySelector('.removed-from-card')
    shoppinIconSrc = $addToCartIcon.getAttribute('src')
    console.log(shoppinIconSrc)
    console.log($removedFromCart)

    //* Using ES6 ternary operator
    shoppinIconSrc !== './assets/add_to_cart.svg'
      ? ($addToCartIcon.src = './assets/add_to_cart.svg') &&
        ($removedFromCart.innerHTML = 'Removed from cart') &&
        $removedFromCart.classList.toggle('removed-from-card--show')
      : ($addToCartIcon.src = './assets/selected-to-buy.svg') &&
        ($removedFromCart.innerHTML = 'Added to cart') &&
        $removedFromCart.classList.toggle('removed-from-card--show')
  }
})
