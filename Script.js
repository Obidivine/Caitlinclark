const cartItems = [
  { name: "Caitlin Clark Tee - White", price: 25 },
  { name: "Caitlin Clark Tee - Black", price: 30 },
];

document.getElementById('order-summary').value = cartItems
  .map(item => `${item.name} - $${item.price}`)
  .join('\n');