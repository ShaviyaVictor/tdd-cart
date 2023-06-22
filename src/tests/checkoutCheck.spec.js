import { ShoppingCart } from "../logic/checkout";

describe('the shopping cart component check', function() {
  let cart;

  beforeEach(function() {
    cart = new ShoppingCart();
  });

  it('it should have a total function', function() {
    expect(cart.total).toBeTruthy();
  });

  it('it should have a total of zero if the cart is empty', function() {
    expect(cart.total()).toEqual(0);
  });

  it('should be able to scan an item', function() {
    expect(cart.scan).toBeTruthy();
  });

});
