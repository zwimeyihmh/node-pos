module.exports = Cart;

var Utilities = require('./utilities.js');
var CartItem = require('./cart-item.js');
var PromotedItem = require('./promoted-item.js');
var PriceDifference = require('./price-difference.js');
var Promotion = require('./promotion.js');
var fixtures = require('../fixtures.js');

function Cart() {
  this.cartItems = [];
  this.promotions = [];
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
//  return undefined;
};

Cart.prototype.getPromotions = function() {
  var promotion;
  for (var i = 0; i < this.cartItems.length; i++) {
    promotion = this.promoteItems(this.cartItems[i]);
    //  this.promotions.push(promotion)
    if (promotion) {
      (this.promotions).push(promotion);
    }
  }

};





Cart.prototype.promoteItems = function(item) {
  var promotionsLoad = fixtures.loadPromotions();
  var promotion;
  var promotionsBarcode = promotionsLoad[0].barcodes;
  promotionsBarcode.forEach(function(promotionBarcode) {
    if (item.item.barcode === promotionBarcode) {
      promotion = {
        item: item.item,
        count: Math.floor(item.count / 3)
      };
    }
  });
  return promotion;
};

Cart.prototype.getItemsString = function() {
  var itemsString = '';
  var utilities = new Utilities();
  var cartItem = new CartItem();
  for (var i = 0; i < this.cartItems.length; i++) {
    var subtotal = this.getSubTotal(this.cartItems[i]);
    itemsString += cartItem.getString(this.cartItems[i]) + '小计：' + utilities.formatPrice(subtotal) + '(元)\n';
  }

  return itemsString;
};


Cart.prototype.getPromotionsString = function() {
  //this.getPromotions();
  var promotionsSting = '';
  var promotionItem = new PromotedItem();
  this.promotions.forEach(function(promotion) {
    promotionsSting += promotionItem.getString(promotion);
  });
  return promotionsSting;
};

Cart.prototype.getSubTotal = function(item) {
  var cartItem = new CartItem();

  var subtotal = cartItem.subTotal(item.item.price, item.count);
  var priceDifference = new PriceDifference();
  if (priceDifference.getSubPrice(item)) {
    subtotal = priceDifference.getSubPrice(item);
  }
  return subtotal;
};

Cart.prototype.print = function() {
//  console.log(this.cartItems);
};
Cart.prototype.getAmount = function() {
  var amount = 0;
  var priceDifference = new PriceDifference();
  var cartItem = new CartItem();
  for (var i = 0; i < this.cartItems.length; i++) {
    amount += this.getSubTotal(this.cartItems[i]);
  }
  return amount;
};
//module.exports = Cart;
