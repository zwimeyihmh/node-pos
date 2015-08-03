var Scan = require('../model/scan.js');
var CartItem = require('../model/cart-item.js');

describe('Scan',function() {

  describe('#scan()',function() {

    it('cartItem',function() {

      var scan = new Scan();
      var cartItem = new CartItem();
      expect(scan.scan('ITEM000001')).toBe({item:cartItem.findItem('ITEM000001'),count:1});

    });

  });

});
