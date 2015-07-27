module.exports = Discounter;

var Cart = require('./cart.js');
var fixtures = require('../fixtures.js');
function Discounter(cartItems) {
  this.promotions = [];
  this.cartItems = cartItems;
}

Discounter.prototype.getPromotions = function(cartItems) {
  var promotion;
  for (var i = 0; i < cartItems.length; i++) {
    promotion = this.promoteItems(cartItems[i]);
    if (promotion) {
      (this.promotions).push(promotion);
    }
  }

};

Discounter.prototype.promoteItems = function(item) {
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


Discounter.prototype.getPromotedAmount = function(promotionItems) {
  var saved = 0;
  for (var i = 0; i < promotionItems.length; i++) {
    saved += promotionItems[i].item.price * promotionItems[i].count;
  }
  return saved;
};

Discounter.prototype.getSubPrice = function(cartItem) {
  var cart = new Cart();
  var promotion = this.promoteItems(cartItem);
  if (promotion) {
    return (cartItem.count - promotion.count) * cartItem.item.price;
  }
  return 0;
};
