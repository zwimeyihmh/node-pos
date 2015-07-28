var fixtures = require('../fixtures.js');

function CartItem(item, count) {
  this.item = item;
  this.count = count;
}

CartItem.prototype.findItem = function(barcode) {
  var allItems = fixtures.loadAllItems();

  for (var i = 0; i < allItems.length; i++) {
    if (barcode === allItems[i].barcode) {
      return allItems[i];
    }
  }
  return undefined;
};

module.exports = CartItem;
