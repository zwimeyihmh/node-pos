module.exports = PriceDifference;

var Cart = require('./cart.js');

function PriceDifference(cartItems, promotions) {
  this.promotions = promotions;
  this.cartItems = cartItems;
}

PriceDifference.prototype.getPromotedAmount = function(promotionItems) {
  saved = 0;
  for (var i = 0; i < promotionItems.length; i++) {
    saved += promotionItems[i].item.price * promotionItems[i].count;
  }
  return saved;
};

PriceDifference.prototype.getSubPrice = function(cartItem) {
  var cart = new Cart();
  var promotion = cart.promoteItems(cartItem);
  if (promotion) {
  //  console.log(promotion);
    return (cartItem.count - promotion.count) * cartItem.item.price;
  }
  return 0;
};

//module.exports = PriceDifference;
