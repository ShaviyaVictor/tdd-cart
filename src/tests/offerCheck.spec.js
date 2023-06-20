import { addOffer, getOfferTotal } from "../logic/offerCalculator";

describe('check offer calculations', function() {

  it('should allow you to add an offer', function() {
    expect(addOffer).toBeTruthy();
  });
  it('should allow you to get the offer total', function() {
    expect(getOfferTotal).toBeTruthy();
  });

  

});
