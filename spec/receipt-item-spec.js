var ReceiptItem = require('../model/receipt-item.js');
var Item = require('../model/item.js');

describe('ReceiptItem', function() {
  describe('#getString()', function() {
    it('cartItem string', function() {
      var cartItem = {
        item:new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count:5
      };
      var string = '名称：雪碧，数量：5瓶，单价：3.00(元),';
      var receiptItem = new ReceiptItem();
      var result = receiptItem.getString(cartItem);
      expect(result).toBe(string);
    });

  });

  describe('#getSubTotal()',function() {

    it('get totalPrice of cartItem',function() {
      var receiptItem = new ReceiptItem();
      var cartItem = {
        item:new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count:5
      };
      var subtotal = receiptItem.getSubTotal(cartItem);
      expect(subtotal).toBe(12);
    });

  });

  describe('#getPromotionString()',function() {
    it('get string of promotion',function() {
      var receiptItem = new ReceiptItem();
      var promotion = {
        item:new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count:1
      };
      var string = '名称：雪碧，数量：1瓶';
      expect(receiptItem.getPromotionString(promotion)).toBe(string);
    })

  });

});
