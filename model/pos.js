var Cart = require('./cart.js');
var Receipt = require('./receipt');
function Pos(scanner,cart){
  this.scaanner = scanner;
  this.cart = cart || new Cart() ;
}

Pos.prototype.scan = function(tags){
  for (var i = 0; i < tags.length; i++)
  {
    cartItem = this.scanner.scan(tags[i]);
    this.cart.addCartItem(cartItem);
  }
}

Pos.prototype.printReceipt = function(){
  var receipt = new Receipt();
  return receipt.printed(this.cart);
}

module.exports = Pos;
