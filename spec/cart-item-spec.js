var CartItem = require('../model/cart-item.js');
var Item = require('../model/item.js');

describe('CartItem',function() {

  describe('#findCartItem()',function() {

    it('can return cartItem',function() {
      var cartItem = new CartItem() ;
      var result = cartItem.findItem('ITEM000001');
      var item = new Item('ITEM000001', '雪碧', '瓶', 3.00);
      expect(result).toEqual(item);
    });

    it('can return undefined',function() {
      var cartItem = new CartItem();
      var result = cartItem.findItem('ITEM000009');
      expect(result).toBe(undefined);
    });

  });

});
