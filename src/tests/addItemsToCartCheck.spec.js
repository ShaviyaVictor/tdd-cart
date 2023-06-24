import { ShoppingCart } from "../logic/checkout";
import { addOffer } from "../logic/offerCalculator";


describe('add items to the shopping cart', function() {

  let cart;

  beforeEach(function() {
    addOffer('A', 3, 130);
    addOffer('B', 2, 45);
    cart = new ShoppingCart();
  });

});