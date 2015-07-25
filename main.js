var Pos = require('./model/pos.js');
var Scan = require('./model/scan.js');
var Cart = require('./model/cart.js');

var tags = [
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
var scan = new Scan();
var cart = new Cart();
var pos = new Pos(scan,cart);
console.log(pos.printReceipt());
