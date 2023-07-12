'use strict'

import { getOfferTotal } from "./offerCalculator";

// products object 
const products = {
  A: 50,
  B: 30,
  C: 25,
  D: 15
};

export function calculate(sku, quantity) {
  let total = 0;
  let offerCalculationResult = getOfferTotal(sku, quantity);

  total += products[sku] * offerCalculationResult.unmatchedItems;
  total += offerCalculationResult.offerTotal;
  
  return total;
}
