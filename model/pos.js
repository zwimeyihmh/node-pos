var Cart = require('./cart.js');
var Receipt = require('./receipt.js');
var Scan = require('./scan.js');


function Pos(scanner,cart){
  this.scanner = scanner || new Scan();
  this.cart = cart || new Cart() ;
}

Pos.prototype.scan = function(tags){
  for (var i = 0; i < tags.length; i++){
    cartItem = this.scanner.scan(tags[i]);
    this.cart.addCartItem(cartItem);
    }
};

Pos.prototype.printReceipt = function() {
  var receipt = new Receipt();
  //this.cart.getPromotions();
//  console.log(this.cart.promotions);
  return receipt.printed(this.cart);
};

module.exports = Pos;
