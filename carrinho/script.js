let cartQuantity = 0;

function updateCartQuantity(value){
    if (cartQuantity + value > 10) {
        alert('The cart is full');
        return;
    } else if (cartQuantity + value < 0) {
        alert('Not enough items in the cart');
        return;
    } else {
        cartQuantity += value;
        displayCartQuantity();
    }
}

function displayCartQuantity() {
    document.querySelector('.js-cart-quantity').innerHTML = `Cart quantity: ${cartQuantity}`;
}