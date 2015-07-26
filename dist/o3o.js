//         _____    
//   ____ |__  /____
//  / __ \ /_ </ __ \
// / /_/ /__/ / /_/ /
// \____/____/\____/
//
// @brief: a ascii emoticon generator based on Node.js
// @author: [turingou](http://guoyu.me)

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = o3o;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _change = require('change');

var _change2 = _interopRequireDefault(_change);

var _yanJson = require('../yan.json');

/**
*
* o3o
* @type[String]: the given type of emoticons
*
**/

function o3o(type) {
  var emoticons = mapEmoticons();

  if (!type) return Object.keys(emoticons);

  if (type === 'random' || type === '*') return randomEmoticons(emoticons);

  if (!checkAvailable(type, emoticons)) return null;

  return fetchRandom(emoticons[type]);
}

/**
*
* Make a emoticons map from source JSON file `yan.json`
*
**/
function mapEmoticons() {
  var Store = {};

  yans.forEach(function (line) {
    line.tag.split(' ').forEach(function (tag) {
      Store[tag] = typeof Store[tag] == 'undefined' ? line.yan : Store[tag].concat(line.yan);
    });
  });

  return Store;
}

/**
*
* Check if given key is available in given Object.
* @key[String]
* @list[Object]
*
**/
function checkAvailable(key) {
  var list = arguments.length <= 1 || arguments[1] === undefined ? mapEmoticons() : arguments[1];

  return Object.prototype.hasOwnProperty.call(list, key);
}

/**
*
* Fetch a random emoticon.
* @list[Object]: the emoticons map.
*
**/
function randomEmoticons() {
  var list = arguments.length <= 0 || arguments[0] === undefined ? mapEmoticons() : arguments[0];

  var tags = Object.keys(list);
  return fetchRandom(list[fetchRandom(tags)]);
}

/**
*
* Fetch a random element from a array
* @src[Array]: a array contains different elements.
*
**/
function fetchRandom(src) {
  if (!src || src.length === 0) return null;

  return src[new chance().integer({
    min: 0,
    max: src.length - 1
  })];
}
module.exports = exports['default'];
//# sourceMappingURL=o3o.js.map