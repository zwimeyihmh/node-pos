var Utilities = require('./utilities.js');
var Item = require('./item');

function CartItem() {

}

CartItem.prototype.subTotal = function(price,count) {
  return price * count;
};

CartItem.prototype.getString = function(cartItem) {
  var utilities = new Utilities();
  return ('名称：' + cartItem.item.name +
    '，数量：' + cartItem.count + cartItem.item.unit +
    '，单价：' + utilities.formatPrice(cartItem.item.price) + '(元)，');
};

CartItem.prototype.findItem = function(barcode){
  var allItems = loadAllItems();

  for(var i = 0; i < allItems.length; i++){
    if(barcode === allItems[i].barcode) {
      return allItems[i];
    }
  }
  return undefined;
};

function loadAllItems() {
  return [
    new Item('ITEM000000', '可口可乐', '瓶', 3.00),
    new Item('ITEM000001', '雪碧', '瓶', 3.00),
    new Item('ITEM000002', '苹果', '斤', 5.50),
    new Item('ITEM000003', '荔枝', '斤', 15.00),
    new Item('ITEM000004', '电池', '个', 2.00),
    new Item('ITEM000005', '方便面', '袋', 4.50)
  ];
}


module.exports = CartItem;
