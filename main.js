const tshirtButton = document.querySelector('.tshirt');
const pantsButton = document.querySelector('.pants');
const hoodieButton = document.querySelector('.hoodie');
const clearButton = document.querySelector('.clear');
var shoppingCart = [];
let viewCart = document.querySelector('.cart');
let allProducts = document.querySelector('.allProducts');
const cartButton = document.querySelector('.fa-cart-shopping')
let productList = document.querySelector('ol')

cartButton.textContent = shoppingCart.length
// dodawanie produktu #1
tshirtButton.addEventListener('click', function () {
    shoppingCart.push('tshirt');
    // shoppingCart.sort();
    // console.log(shoppingCart.length, shoppingCart);
    let li = document.createElement('li');
    viewCart.appendChild(li);
    li.textContent = 'tshirt';
    allProducts.textContent = `Ilość Twoich produktów ${shoppingCart.length}`
    cartButton.textContent = shoppingCart.length
});

// dodawanie produktu #4
pantsButton.addEventListener('click', function () {
    shoppingCart.push('pants');
    // shoppingCart.sort();
    // console.log(shoppingCart.length, shoppingCart);
    let li = document.createElement('li');
    viewCart.appendChild(li);
    li.textContent = 'pants';
    allProducts.textContent = `Ilość Twoich produktów: ${shoppingCart.length}`
    cartButton.textContent = shoppingCart.length
});

// dodawanie produktu #3
hoodieButton.addEventListener('click', function () {
    shoppingCart.push('hoodie');
    // shoppingCart.sort();
    // console.log(shoppingCart.length, shoppingCart);
    let li = document.createElement('li');
    viewCart.appendChild(li);
    li.textContent = 'hoodie';
    allProducts.textContent = `Ilość Twoich produktów ${shoppingCart.length}`
    cartButton.textContent = shoppingCart.length
    cartButton.textContent.style.color = 'red'
});

// czyszczenie koszyka
clearButton.addEventListener('click', function () {
    shoppingCart.splice(0);
    // console.log(shoppingCart.length, shoppingCart);
    viewCart.textContent = shoppingCart;
    allProducts.textContent = `Ilość Twoich produktów wynosi 0`
    cartButton.textContent = shoppingCart.length
});

cartButton.addEventListener('click', function(){
    viewCart.classList.toggle('active')
});







