document.addEventListener('DOMContentLoaded', () => {
  const cartItemsTable = document.querySelector('#cart-items tbody');
  const totalPriceElement = document.getElementById('total-price');
  const placeOrderButton = document.getElementById('place-order');

  // Get the cart data from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Display cart items
  let total = 0;
  cart.forEach(item => {
    const row = document.createElement('tr');

    // Calculate item total
    const itemTotal = item.quantity * item.price;
    total += itemTotal;

    // Insert item details
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$${itemTotal.toFixed(2)}</td>
    `;
    cartItemsTable.appendChild(row);
  });

  // Update the total price
  totalPriceElement.textContent = total.toFixed(2);

  // Set the payment link
  placeOrderButton.href = `https://your-payment-site.com?total=${total}`;
});