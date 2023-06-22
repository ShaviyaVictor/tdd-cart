describe('the shopping cart component', functiom() {
  let cart;

  beforeEach(functiom() {
    cart = new ShoppingCart();
  });

  it('it should have a total function', function() {
    expect(cart.total).toBeTruthy();
  });


});