var o3o = require('../index');
var store = require('../libs/store');
var should = require('should');

describe('Available', function() {
  it('should return a available list', function() {
    var list = o3o('tags');
    list.should.be.an.instanceof(Array)
  });
});

describe('Fetch', function() {
  it('should fetch a ascii emoticon from right type', function() {
    var type = 'laugh';
    var type2 = '摊手';
    (store.list[type].indexOf(o3o(type))).should.be.above(-1);
    (store.list[type2].indexOf(o3o(type2))).should.be.above(-1);
  });
});

describe('Check', function() {
  it('should check type right', function() {
    var type = store.check('fajesqsqwsq');
    var type2 = store.check('laugh');
    type.should.equal(false);
    type2.should.equal(true);
  });
});