var Cart = require('../model/cart.js');
var Item = require('../model/item.js');
var ReceiptItem = require('../model/receipt-item.js');

describe('Cart', function() {

  var receiptItem = new ReceiptItem();



  describe('#addCartItem()', function() {
    it('it can add', function() {
      var cartItem = {
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 1
      };
      var cartItems = [{
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 2
      }];
      var cart = new Cart(cartItems);
      var items = [{
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 3
      }];
      cart.addCartItem(cartItem);
      expect(cart.cartItems).toEqual(items);
    });

    it('it can add', function() {
      var cartItem = {
        item: new Item('ITEM000005', '方便面', '袋', 4.50),
        count: 1
      };
      var cartItems = [{
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 2
      }];
      var cart = new Cart(cartItems);
      var items = [{
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 2
      }, {
        item: new Item('ITEM000005', '方便面', '袋', 4.50),
        count: 1
      }];
      cart.addCartItem(cartItem);
      expect(cart.cartItems).toEqual(items);

    });
  });

  describe('#getAmount()', function() {
    beforeEach(function() {

    });
    it('get the subtotal of cart', function() {
      var receiptItem = new ReceiptItem();
      var cartItem =  {
        item: new Item('ITEM000005', '方便面', '袋', 4.50),
        count: 1
      };
      spyOn(receiptItem,'getSubTotal').and.callFake(function(cartItem){
        return 3;
      });
      var items = [{
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 2
      }, {
        item: new Item('ITEM000005', '方便面', '袋', 4.50),
        count: 1
      }];
      var cart = new Cart(items);
      expect(cart.getAmount()).toBe(10.5);
    });
  });

});
