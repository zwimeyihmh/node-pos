var Pos = require('./model/pos.js');
var Scan = require('./model/scan.js');
var Cart = require('./model/cart.js');

function printReceipt(tags) {
  var scan = new Scan();
  var cart = new Cart();
  var pos = new Pos(scan, cart);

  pos.scan(tags);
  console.log(pos.print());
}

exports.printReceipt = printReceipt;
