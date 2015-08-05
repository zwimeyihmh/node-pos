var Pos = require('../model/pos.js');
var Cart = require('../model/cart.js');
var Receipt = require('../model/receipt.js');
var Item = require('../model/item.js');
var Utilities = require('../model/utilities.js');

describe('Pos', function() {


  describe('#print', function() {
    it('can print result', function() {
      var utilities = new Utilities();
      var cart = new Cart();
      var receipt = new Receipt();
      var pos = new Pos();
      var items = [{
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 1
      }, {

        item: new Item('ITEM000005', '方便面', '袋', 4.50),
        count: 1
      }];
        var a= '***<没钱赚商店>收据***\n' +
          '打印时间：' + utilities.getTime() + '\n' +
          '----------------------\n' +
          '----------------------\n'+
            '挥泪赠送商品：\n' +
            '----------------------\n' +
            '总计：0.00(元)\n' +
            '节省：0.00(元)\n' +
          '**********************';
      expect(pos.print()).toEqual(a);
    });
  });

});
