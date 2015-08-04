module.exports = Discounter;

var Cart = require('./cart.js');
var PromotionsType = require('./promotion-type.js');

function Discounter(promotions) {
  this.promotions = promotions||[];
  }

Discounter.prototype.getPromotions = function(cartItems) {
  var promotion;
  for (var i = 0; i < cartItems.length; i++) {
    promotion = this.findPromoteItem(cartItems[i]);
    if (promotion) {
      (this.promotions).push(promotion);
    }
  }

};

Discounter.prototype.findPromoteItem = function(cartItem) {
  var promotion;
  var promotionsType = new PromotionsType("BUY_TWO_GET_ONE_FREE");
  var promotionsBarcode = promotionsType.findPrommotionType();
  promotionsBarcode.forEach(function(promotionBarcode) {
    if (cartItem.item.barcode === promotionBarcode) {
      promotion = {
        item: cartItem.item,
        count: Math.floor(cartItem.count / 3)
      };
    }
  });
  return promotion;
};

Discounter.prototype.getPromotedAmount = function() {
  var saved = 0;
  for (var i = 0; i < this.promotions.length; i++) {
    saved += this.promotions[i].item.price * this.promotions[i].count;
  }
  return saved;
};

Discounter.prototype.getSubPrice = function(cartItem) {
  var promotion = this.findPromoteItem(cartItem);
  if (promotion) {
    return (promotion.count) * promotion.item.price;
  }
  return 0;
};
