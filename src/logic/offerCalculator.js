// sku - stock keeping units
let offers = {};

// offer proposition
export function addOffer(sku, quantity, price) {
  offers[sku] = {
    quantity: quantity,
    price: price
  };  
};

// calculate the total based on offer 
export function getOfferTotal(sku, quantity) {
  let result = {
    offerTotal: 0,
    unmatchedItems: quantity
  };

  let skuOffer = offers[sku];

  // offer calculation logic for the total and the number of unmatched products
  if(skuOffer && quantity >= skuOffer.quantity) {
    let numberOfOfferMatches = Math.floor(quantity / skuOffer.quantity);
    
    result.unmatchedItems = quantity % skuOffer.quantity;
    result.offerTotal = skuOffer.price * numberOfOfferMatches;
  }

  return result;
}

