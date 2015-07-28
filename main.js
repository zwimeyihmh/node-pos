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

tags = [
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000003-2',
  'ITEM000005',
  'ITEM000005',
  'ITEM000005'
];
printReceipt(tags);

exports.printReceipt = printReceipt;
