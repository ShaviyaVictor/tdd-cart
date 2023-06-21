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
      // product A being 50 each and 130 for 3 under sku offer
      let result = getOfferTotal('A', 4);
      expect(result).toEqual({
        offerTotal: 0,
        unmatchedItems: 4
      });
    });
  });

  describe('when there is a matching offer', function() {
    it('should calculate the offer price for A and pass in the remaining untotalled items', function() {
      // product A being 50 each and 130 for 3 under sku offer
      addOffer('A', 3, 130);
      let result = getOfferTotal('A', 4);
      expect(result).toEqual({
        offerTotal: 130,
        unmatchedItems: 1
      });
    });

    it('should calculate offer price for product B and remaining untotalled items', function() {
      // product B being 30 each and 45 for 2 under sku offer
      addOffer('B', 2, 45);
      let result = getOfferTotal('B', 3);
      expect(result).toEqual({
        offerTotal: 45,
        unmatchedItems: 1
      });
    });
  });


});
