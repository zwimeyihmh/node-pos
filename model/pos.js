var Receipt = require('./receipt');
function Pos(scanner,cart){
  this.scaanner = scanner;
  this.cart = cart ;
}

Pos.prototype.printReceipt = function(){
  var receipt = new Receipt();
  return receipt.printed();
}

module.exports = Pos;
