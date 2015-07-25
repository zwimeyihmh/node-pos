var Utilities = require('./utilities.js');
function Receipt(){

}
Receipt.prototype.printed = function(){
  var utilities= new Utilities();
//  var promotionPrice = new PriceDifference();
  return ('***<没钱赚商店>收据***\n' +
  '打印时间：' + utilities.getTime() + '\n' +
  '----------------------\n' +
//  cart.getItemsString() +
  '----------------------\n' +
  '挥泪赠送商品：\n' +
  //cart.getPromotionsString() +
  '----------------------\n' +
  //'总计：' + utilities.formatPrice(cart.getAmount()) + '(元)\n' +
  //'节省：' + utilities.formatPrice(promotionPrice.getPromotedAmount(cart.promotions)) + '(元)\n' +
    '**********************');
}
module.exports = Receipt;
