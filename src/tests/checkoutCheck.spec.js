import { ShoppingCart } from "../logic/checkout";

describe('the shopping cart component check', function() {
  let cart;

  beforeEach(function() {
    cart = new ShoppingCart();
  });

  it('it should have a total function', function() {
    expect(cart.total).toBeTruthy();
  });

});