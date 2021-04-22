import faker from "faker";

const cartItemsLength = faker.datatype.number(100);
document.querySelector(
  "#dev-cart"
).innerHTML = `<h3>You have ${cartItemsLength} items on your cart</h3>`;
