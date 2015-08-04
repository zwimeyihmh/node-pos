var Discounter = require('../model/discounter.js');
var Item = require('../model/item.js');
var PromotionsType = require('../model/promotion-type.js');

describe('Discounter', function() {
  describe('#findPromoteItem()', function() {
    var promotionType;
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
      var discounter = new Discounter();
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
      var discounter = new Discounter();
      var cartItem = {
        item: new Item('ITEM000003', '荔枝', '斤', 15.00),
        count: 2
      };

      var result = discounter.findPromoteItem(cartItem);
      expect(result).toBe(undefined);
    });

    describe('#getPromotedAmount()', function() {
      it('get saved money', function() {
        var promotions = [{
          item: new Item('ITEM000003', '荔枝', '斤', 15.00),
          count: 2
        }];
        var discounter = new Discounter(promotions);
        expect(discounter.getPromotedAmount()).toBe(30);
      });
    });
    it('get saved money', function() {
      var promotions = [{
        item: new Item('ITEM000003', '荔枝', '斤', 15.00),
        count: 1
      }, {
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 5
      }];
      var discounter = new Discounter(promotions);
      expect(discounter.getPromotedAmount()).toBe(30);
    });

  });

  describe('#getSubPrice()', function() {
    it('get promotion price', function() {
      var cartItem = {
        item: new Item('ITEM000001', '雪碧', '瓶', 3.00),
        count: 5
      };
      var discounter = new Discounter();
      expect(discounter.getSubPrice(cartItem)).toBe(3);
    });
    it('not get cartitem price not in promotions', function() {
      var cartItem = {
        item: new Item('ITEM000005', '荔枝', '斤', 15.00),
        count: 2
      };
      var discounter = new Discounter();
      expect(discounter.getSubPrice(cartItem)).toBe(0);
    });
  });

});
