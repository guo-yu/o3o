// 执行各个功能点测试
var main = require('./index'),
    store = require('./store'),
    should = require('should');

describe('FETCH', function() {
    it('should fetch a ascii emoticon from right type', function() {
        var type = 'laugh';
        (store.list[type].indexOf(main.fetch(type))).should.be.above(-1);
    });
});

describe('CHECK', function() {
    it('should check type right', function() {
        var type = store.check('abc'),
            type2 = store.check('laugh');
        type.should.equal(false);
        type2.should.equal(true);
    });
});