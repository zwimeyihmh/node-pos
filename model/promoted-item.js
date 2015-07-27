var Promotion = require('./promotion.js');
var fixtures = require('../fixtures.js');

function PromotedItem() {
}

PromotedItem.prototype.subTotal = function(price,count) {
  return count * price;
};

PromotedItem.prototype.getString = function(promotion) {
  return ('名称：' + promotion.item.name +
    '，数量：' + promotion.count + promotion.item.unit + '\n');
};

PromotedItem.prototype.promoteItems = function(item) {
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

module.exports = PromotedItem;
