import faker from 'faker';

const mount = (el) => {
  const cartText = `<h3>You have ${faker.datatype.number(100)} items in your cart</h3>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');
  if (el) {
    mount(el);
  }
}

export { mount };
