document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartList = document.getElementById("cart-list");
  const totalPrice = document.getElementById("total-price");

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    totalPrice.textContent = "Total: $0.00";
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
    total += item.price;
  });

  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
});

function placeOrder() {
  alert("Order placed successfully!");
  localStorage.clear();
  window.location.href = "index.html";
}