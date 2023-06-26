import { ShoppingCart } from "../logic/checkout";
import { addOffer } from "../logic/offerCalculator";


describe('add items to the shopping cart', function() {

  let cart;

  beforeEach(function() {
    addOffer('A', 3, 130);
    addOffer('B', 2, 45);
    cart = new ShoppingCart();
  });

  it('can add items in any order', function() {
    cart.scan('B');
    cart.scan('A');
    cart.scan('B');
    expect(cart.total()).toEqual(95);
  });

  describe('A', function() {
    
    it('should add item A and add price 50 for the item', function() {
      cart.scan('A');
      expect(cart.total()).toEqual(50);
    });
    it('should add two A items and total the price to 100', function() {
      cart.scan('A');
      cart.scan('A');
      // cart.scan('A');
      expect(cart.total()).toEqual(100);
    });
    it('should add three A items and total the price to 130 according to the offer', function() {
      cart.scan('A');
      cart.scan('A');
      cart.scan('A');
      expect(cart.total()).toEqual(130);
    });
    it('should add four A items and total the price to 180 inclusive of the offer and items ouside the offer', function() {
      cart.scan('A');
      cart.scan('A');
      cart.scan('A');
      cart.scan('A');
      expect(cart.total()).toEqual(180);
    });

  });

  describe('B', function() {

    it('should add item B and add price 30 for the item', function() {
      cart.scan('B');
      expect(cart.total()).toEqual(30);
    });
    it('should add 2 item B and total the price to 45', function() {
      cart.scan('B');
      cart.scan('B');
      expect(cart.total()).toEqual(45);
    });
    it('should add 3 item B and total the price to 75', function() {
      cart.scan('B');
      cart.scan('B');
      cart.scan('B');
      expect(cart.total()).toEqual(75);
    });
    it('should add 4 item B and total the price to 90', function() {
      cart.scan('B');
      cart.scan('B');
      cart.scan('B');
      cart.scan('B');
      expect(cart.total()).toEqual(90);
    });

  });

  describe('C', function() {
    it('should add item C and add price 20 for the item', function() {
      cart.scan('C');
      expect(cart.total()).toEqual(20);
    });
  });

});