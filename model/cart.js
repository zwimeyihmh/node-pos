module.exports = Cart;

var Utilities = require('./utilities.js');
var CartItem = require('./cart-item.js');
var PromotedItem = require('./promoted-item.js');
var Discounter = require('./discounter.js');
var Promotion = require('./promotion.js');
var fixtures = require('../fixtures.js');

function Cart() {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function(cartItem) {
  var　 existed　= Cart.findCartItem(cartItem,this.cartItems);
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
  var cartItem = new CartItem();
  for (var i = 0; i < this.cartItems.length; i++) {
    amount += cartItem.getSubTotal(this.cartItems[i]);
  }
  return amount;
};
