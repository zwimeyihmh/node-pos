var fixtures = require('../fixtures.js');

function PromotionsType(){
  this.promotionsType = fixtures.loadPromotions();
}

PromotionsType.prototype.findPrommotionType = function(){
  for(var i = 0; i < this.promotionsType.length;i++){
    if(this.promotionsType[i].type === "BUY_TWO_GET_ONE_FREE"){
      return this.promotionsType[i].barcodes;
    }
  }
};
module.exports = PromotionsType;
