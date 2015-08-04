var Receipt = require('../model/receipt.js');
var ReceiptItem = require('../model/receipt-item.js');
var Cart = require('../model/cart.js');
var Item = require('../model/item.js');

describe('Receipt',function() {
  describe('#getItemsString()',function() {

    it('get Items string',function() {
      var receiptItem = new ReceiptItem();
      var items = [{
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 2
      }, {
        item: new Item('ITEM000005', '方便面', '袋', 4.50),
        count: 1
      }];
      var cart = new Cart(items);
      var cartItem = cart.cartItems[0];
      var i = 0;
      var receipt = new Receipt();
      spyOn(receiptItem,'getSubTotal').and.callFake(function(cartItem){
        var result = items[i].count*items[i].item.price;
        i++;
        return result;
      });
      var x = 0;
      spyOn(receiptItem,'getString').and.callFake(function(cartItem){
        var result = ('名称：' + items[x].item.name +
          '，数量：' + items[x].count + items[x].item.unit );
          x++;
          return result;
      });
      var strings = '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
      '名称：方便面，数量：1袋，单价：4.50(元)，小计：4.50(元)\n';
      expect(receipt.getItemsString(cart)).toEqual(strings);
    });


  });

  describe('#getPromotionsString()',function(){
    it('get promotions string',function(){
      var items = [{
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 1
      }, {
        item: new Item('ITEM000005', '方便面', '袋', 4.50),
        count: 1
      }];
      var receiptItem = new ReceiptItem();
      var receipt = new Receipt();
      var promotion = items[0];
      var i = 0;
      spyOn(receiptItem,'getPromotionString').and.callFake(function(promotion){
        var result = ('名称：' + items[i].item.name +
          '，数量：' + items[i].count + items[i].item.unit + '\n');
          i++;
          return result;
      });
      var promotionsString = '名称：雪碧，数量：1瓶\n' +
      '名称：方便面，数量：1袋\n';
      expect(receipt.getPromotionsString(items)).toEqual(promotionsString);

    });    
    });


});
