import { calculate } from "./prices";

export function ShoppingCart() {
  this.items = {};
};

ShoppingCart.prototype.total = function() {
  let total = 0;

  for(let itemSku in this.items) {
    let itemQuantity = this.items[itemSku];

    total += calculate(itemSku, itemQuantity);
  };

  return total;
};

ShoppingCart.prototype.scan = function(scannedSKU) {
  let currentQuantity = this.items[scannedSKU] || 0;
  this.items[scannedSKU] = ++currentQuantity;
};
