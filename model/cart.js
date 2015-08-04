module.exports = Cart;

var ReceiptItem = require('./receipt-item.js');

function Cart(cartItems) {
  this.cartItems = cartItems||[];
}

Cart.prototype.addCartItem = function(cartItem) {

  var existed　= Cart.findCartItem(cartItem,this.cartItems);

  if (existed) {
    existed.count += cartItem.count;
  } else {
    this.cartItems.push(cartItem);
  }

};

Cart.findCartItem = function(cartItem,cartItems) {

  for (var i = 0; i < cartItems.length; i++) {

    if (cartItem.item.barcode === cartItems[i].item.barcode) {
      return cartItems[i];
    }

  }

};

Cart.prototype.getAmount = function() {

  var amount = 0;
  var receiptItem = new ReceiptItem();

  for (var i = 0; i < this.cartItems.length; i++) {
    amount += receiptItem.getSubTotal(this.cartItems[i]);
  }

  return amount;
};
