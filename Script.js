let cart = [];

// Update Cart Count
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

// Add to Cart Functionality
function addToCart(itemName, itemPrice) {
  if (!isInCart(itemName)) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} added to cart!`);
    updateCartCount();
    updateOrderedShirts();
  } else {
    alert(`${itemName} is already in the cart.`);
  }
}

// Initialize Cart from Local Storage
document.addEventListener('DOMContentLoaded', () => {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartCount();
  updateOrderedShirts();
});

// Navigate to Checkout
function goToCheckout() {
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'checkout.html';
}