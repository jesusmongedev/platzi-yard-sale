// Variables with the query selectors
import { Products } from './data/products'
const $shoppingButton = document.querySelector('.shopping-cart-link')
const $cartContainer = document.querySelector('.shopping-cart-container')
const $leftArrowButton = document.querySelector('.left-arrow')
const $produtCard = document.querySelectorAll('.product-card')
const $mobileMenuIcon = document.querySelector('.header__menu-icon')
const $mobileMenu = document.querySelector('.menu-mobile')
const $cardsWrapper = document.querySelector('.cards-container')

// When the user click the shopping cart button show shopping details
const showShoppingCart = () => {
  console.log('working')
  $cartContainer.classList.add('show-cart-container')
  document.body.classList.add('no-scroll')
}
// When the user click the left arrow icon  shopping details
const hideShoppingCart = () => {
  console.log('great')
  $cartContainer.classList.remove('show-cart-container')
  document.body.classList.remove('no-scroll')
}

// Show mobile menu when clicked
const showMobileMenu = () => {
  console.log('first')
  document.body.classList.add('no-scroll')
  $mobileMenu.classList.add('menu-mobile--show')
}
// Hide Mobile Menu
const hideMobileMenu = () => {
  document.body.classList.remove('no-scroll')
  $mobileMenu.classList.remove('menu-mobile--show')
}

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

// Dynamic product card container
console.log(Products)
