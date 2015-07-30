module.exports = Discounter;

var Cart = require('./cart.js');
var PromotionsType = require('./promotion-type.js');

function Discounter() {
  this.promotions = [];
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
  var promotion;
  var promotionsType = new PromotionsType("BUY_TWO_GET_ONE_FREE");
  var promotionsBarcode = promotionsType.findPrommotionType();
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
    return (promotion.count) * promotion.item.price;
  }
  return 0;
};
