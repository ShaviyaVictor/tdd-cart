import { calculate } from "../logic/prices";

describe('check price calculations', function() {

  describe('A', function() {
    it('should scan product A and add its respective price of 50', function() {
      expect(calculate('A', 1)).toEqual(50);
    });
    it('should scan 2 A products and total 100', function() {
      expect(calculate('A', 2)).toEqual(100);
    });
    it('should scan 3 A products and total 150', function() {
      expect(calculate('A', 3)).toEqual(150);
    });
    it('should scan 4 A products and total 200', function() {
      expect(calculate('A', 4)).toEqual(200);
    });
  });

  describe('B', function() {
    it('should scan product B and add its respective price of 30', function() {
      expect(calculate('B', 1)).toEqual(30);
    });
    it('should scan 2 B products and total 60', function() {
      expect(calculate('B', 2)).toEqual(60);
    });
    it('should scan 3 B products and total 90', function() {
      expect(calculate('B', 3)).toEqual(90);
    });
    it('should scan 4 B products and total 120', function() {
      expect(calculate('B', 4)).toEqual(120);
    });
  });

  describe('C', function() {
    it('should scan product C and add its respective price of 25', function() {
      expect(calculate('C', 1)).toEqual(25);
    });
    it('should scan 2 C products and total 50', function() {
      expect(calculate('C', 2)).toEqual(50);
    });
    it('should scan 3 C products and total 75', function() {
      expect(calculate('C', 3)).toEqual(75);
    });
    it('should scan 4 C products and total 100', function() {
      expect(calculate('C', 4)).toEqual(100);
    });
  });

});
