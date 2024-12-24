let cart = [];

// Check if a shirt is in the cart
function isInCart(itemName) {
  return cart.some((item) => item.name === itemName);
}

// Add to Cart Functionality
function addToCart(itemName, itemPrice) {
  if (!isInCart(itemName)) {
    cart.push({ name: itemName, price: itemPrice });
    alert(`${itemName} added to cart!`);
    updateOrderedShirts();
  } else {
    alert(`${itemName} is already in the cart.`);
  }
}

// Highlight shirts already in the cart
function updateOrderedShirts() {
  document.querySelectorAll('.shirt-card').forEach((card) => {
    const shirtName = card.querySelector('h2').textContent;
    if (isInCart(shirtName)) {
      card.classList.add('ordered');
    } else {
      card.classList.remove('ordered');
    }
  });
}

// Navigate to Checkout
function goToCheckout() {
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'checkout.html';
}

// Initialize Cart from Local Storage
document.addEventListener('DOMContentLoaded', () => {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateOrderedShirts();
});