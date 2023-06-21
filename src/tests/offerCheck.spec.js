import { addOffer, getOfferTotal } from "../logic/offerCalculator";

describe('check offer calculations', function() {

  it('should allow you to add an offer', function() {
    expect(addOffer).toBeTruthy();
  });
  it('should allow you to get the offer total', function() {
    expect(getOfferTotal).toBeTruthy();
  });

  describe('when there are no offer', function() {
    it('should calculate offer price as 0 and remaining untotalled items as quantity passed in', function() {
      // product A being 50 each and 130 for 3 under sku
      let result = getOfferTotal('A', 4);
      expect(result).toEqual({
        offerTotal: 0,
        unmatchedItems: 4
      });
    });
  })

});
