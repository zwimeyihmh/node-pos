var Scan = require('../model/scan.js');
var Item = require('../model/item.js');

describe('Scan',function() {

  describe('#scan()',function() {

    it('cartItem',function() {

      var scan = new Scan();

      expect(scan.scan('ITEM000001')).toEqual({item:new Item('ITEM000001', '雪碧', '瓶', 3.00),count:1});

    });

  });

});
