var Utilities = require('./utilities.js');
var Item = require('./item.js');
var fixtures = require('../fixtures.js');
var Discounter = require('./discounter.js');

function CartItem() {

}

CartItem.prototype.subTotal = function(price, count) {
  return price * count;
};

CartItem.prototype.getString = function(cartItem) {
  var utilities = new Utilities();
  return ('名称：' + cartItem.item.name +
    '，数量：' + cartItem.count + cartItem.item.unit +
    '，单价：' + utilities.formatPrice(cartItem.item.price) + '(元)，');
};

CartItem.prototype.getSubTotal = function(item) {
  var discounter = new Discounter();
  var subtotal = this.subTotal(item.item.price, item.count);
  if (discounter.getSubPrice(item)) {
    subtotal = discounter.getSubPrice(item);
  }
  return subtotal;
};

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
