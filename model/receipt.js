var Utilities = require('./utilities.js');
var Discounter = require('./discounter.js');
var ReceiptItem = require('./receipt-item.js');

function Receipt(receiptItem) {
  this.receiptItem = receiptItem||new ReceiptItem();
}

Receipt.prototype.printed = function(cart) {
  var utilities = new Utilities();
  var discounter = new Discounter();
  discounter.getPromotions(cart.cartItems);
  return ('***<没钱赚商店>收据***\n' +
    '打印时间：' + utilities.getTime() + '\n' +
    '----------------------\n' +
    this.getItemsString(cart) +
    '----------------------\n' +
    '挥泪赠送商品：\n' +
    this.getPromotionsString(discounter.promotions) +
    '----------------------\n' +
    '总计：' + utilities.formatPrice(cart.getAmount()) + '(元)\n' +
    '节省：' + utilities.formatPrice(discounter.getPromotedAmount()) + '(元)\n' +
    '**********************');
};

Receipt.prototype.getItemsString = function(cart) {
  var itemsString = '';
  var utilities = new Utilities();
  for (var i = 0; i < cart.cartItems.length; i++) {
    var subtotal = this.receiptItem.getSubTotal(cart.cartItems[i]);
    itemsString += this.receiptItem.getString(cart.cartItems[i]) + '小计：' + utilities.formatPrice(subtotal) + '(元)\n';
  }

  return itemsString;
};

Receipt.prototype.getPromotionsString = function(promotions) {
  var promotionsSting = '';
  for(var i = 0; i < promotions.length; i++) {
    promotionsSting += this.receiptItem.getPromotionString(promotions[i]);
  }
  return promotionsSting;
};

module.exports = Receipt;
