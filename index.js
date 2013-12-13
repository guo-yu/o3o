//         _____     
//   ____ |__  /____ 
//  / __ \ /_ </ __ \
// / /_/ /__/ / /_/ /
// \____/____/\____/ 
//
// @brief: ascii emoticon store based on Node.js
// @author: [guoyu](http://guoyu.me)

var store = require('./libs/store'),
    chance = require('chance');

exports.fetch = function(type) {
    if (store.check(type)) return store.list[type][ new chance().integer({ min: 0, max: list.length - 1}];
    return null;
}

exports.available = function() {
    return store.list().available;
}