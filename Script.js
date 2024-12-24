let cart = [];

function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  alert(`${itemName} added to cart!`);
}

function goToCheckout() {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "checkout.html";
}