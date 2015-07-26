var Utilities = require('./utilities.js');
var CartItem = require('./cart\tem.js');
var PromotedItem = require('./promoted-item.js');



function Cart() {
  this.cartItems = [];
  this.promotions = [];
}

Cart.prototype.addCartItem = function(item) {
  var　 cartItem　 = 　this.findCartItem(item);
  if (cartItem) {
    cartItem.count++;
  } else {
    this.cartItems.push(item);
  }
};

Cart.prototype.findCartItem = function(cartItem) {
  for (var i = 0; i < this.cartItems.length; i++) {
    if (cartItem.item.barcode === this.cartItems[i].item.barcode) {
      return this.cartItems[i];
    }
  }
  return undefined;
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

function loadPromotions() {
  return [
    new Promotion('BUY_TWO_GET_ONE_FREE', [
      'ITEM000000',
      'ITEM000001',
      'ITEM000005'
    ])
  ];
}


Cart.prototype.promoteItems = function(item) {
  var promotionsLoad = loadPromotions();
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
  this.getPromotions();
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
module.exports = Cart;
