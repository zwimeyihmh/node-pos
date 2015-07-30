var Discounter = require('./discounter.js');
var Utilities = require('./utilities.js');

function ReceiptItem(){
}

ReceiptItem.prototype.subTotal = function(price,count) {
  return price * count;
};

ReceiptItem.prototype.getString = function(cartItem) {
  var utilities = new Utilities();
  return ('名称：' + cartItem.item.name +
    '，数量：' + cartItem.count + cartItem.item.unit +
    '，单价：' + utilities.formatPrice(cartItem.item.price) + '(元)，');
};

ReceiptItem.prototype.getSubTotal = function(item) {
  var discounter = new Discounter();
  var subtotal = this.subTotal(item.item.price, item.count);
  if (discounter.getSubPrice(item)) {
    subtotal = subtotal - discounter.getSubPrice(item);
  }
  return subtotal;
};

ReceiptItem.prototype.getPromotionString = function(promotion) {
  return ('名称：' + promotion.item.name +
    '，数量：' + promotion.count + promotion.item.unit + '\n');
};

module.exports = ReceiptItem;
