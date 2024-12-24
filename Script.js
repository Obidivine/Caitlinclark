// Cart functionality
let cart = [];

function addToCart(productName, productPrice) {
  const item = { name: productName, price: productPrice };
  cart.push(item);
  alert(`${productName} has been added to your cart.`);
  console.log(cart);
}