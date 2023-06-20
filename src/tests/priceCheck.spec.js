import { calculate } from "../logic/prices";

describe('check price calculations', function() {

  describe('A', function() {
    it('should scan product A and add its respective price of 50', function() {
      expect(calculate('A', 1)).toEqual(50);
    });
  });

});
