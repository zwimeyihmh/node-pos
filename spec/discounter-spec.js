var Discounter = require('../model/discounter.js');
var Item = require('../model/item.js');
var PromotionsType = require('../model/promotion-type.js');

describe('Discounter', function() {
  describe('#findPromoteItem()', function() {
    var promotionType;
    var discounter = new Discounter();
    beforeEach(function() {
      promotionType = new PromotionsType();
      spyOn(promotionType, 'findPrommotionType').and.callFake(function() {
        return ['ITEM000000',
          'ITEM000001',
          'ITEM000005'
        ];
      });
    });

    it('get promotionItem', function() {

      var cartItem = {
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 5
      };

      var result = discounter.findPromoteItem(cartItem);
      expect(result).toEqual({
        item: cartItem.item,
        count: 1
      });

    });

    it('return undefined', function() {

      var cartItem = {
        item: new Item('ITEM000003', '荔枝', '斤', 15.00),
        count: 2
        };

      var result = discounter.findPromoteItem(cartItem);
      expect(result).toBe(undefined);
    });

  });

  

});
