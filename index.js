//         _____     
//   ____ |__  /____ 
//  / __ \ /_ </ __ \
// / /_/ /__/ / /_/ /
// \____/____/\____/ 
//
// @brief: ascii emoticon store based on Node.js
// @author: [guoyu](http://guoyu.me)

var chance = require('chance');
var store = require('./libs/store');

exports.fetch = function(type) {
    var list = store.list();
    if (store.check(type)) return list[type][ new chance().integer({ min: 0, max: list.length - 1}) ];
    return null;
}

exports.available = function() {
    return store.list().available;
}