// sku - stock keeping units
let offers = {};

export function addOffer(sku, quantity, price) {
  offers[sku] = {
    quantity: quantity,
    price: price
  };  
};

export function getOfferTotal(sku, quantity) {
  let result = {
    offerTotal: 0,
    unmatchedItems: quantity
  };

  let skuOffer = offers[sku];

  if(skuOffer && quantity >= skuOffer.quantity) {
    let numberOfOfferMatches = Math.floor(quantity / skuOffer.quantity);
    
    result.unmatchedItems = quantity % skuOffer.quantity;
    result.offerTotal = skuOffer.price * numberOfOfferMatches;
  }

  return result;
}

