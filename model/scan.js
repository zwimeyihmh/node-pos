var CartItem = require('./cart_item.js');
function Scan(tag) {
  this.tag = tag || '';
}

Scan.prototype.scan = function(tag) {
  var count = 1;
  var ifExist = tag.indexOf('-');
  if (ifExist !== -1) {
    var arrayTag = tag.split('-');
    count = parseFloat(arrayTag[1]);
    tag = arrayTag[0];
  }
  var cartitem = new CartItem();
  return ({
    item: cartitem.findItem(tag),
    count: count
  });

};

module.exports = Scan;
