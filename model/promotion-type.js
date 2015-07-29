var fixtures = require('../fixtures.js');

function PromotionsType(promotionType){
  this.promotionsType = fixtures.loadPromotions();
  this.promotionType = promotionType;
}

PromotionsType.prototype.findPrommotionType = function(){
  for(var i = 0; i < this.promotionsType.length;i++){
    if(this.promotionsType[i].type === this.promotionType){
      return this.promotionsType[i].barcodes;
    }
  }
};
module.exports = PromotionsType;
