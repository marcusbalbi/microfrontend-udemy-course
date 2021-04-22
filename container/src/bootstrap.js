import { mount as mountProductList } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

console.log('Container!');

mountProductList(document.querySelector("#products-list"));
mountCart(document.querySelector("#cart"));
