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
  let currentQuantity = itemQuantity || 0;
  itemQuantity = ++currentQuantity;
};
