var chance = require('chance');
var yans = require('../yan').list;

module.exports = o3o;

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
  yans.forEach(function(line) {
    line.tag.split(" ").forEach(function(tag) {
      Store[tag] = (typeof Store[tag] == 'undefined') ?
        line.yan :
        Store[tag].concat(line.yan);
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
function checkAvailable(key, list) {
  return Object.prototype.hasOwnProperty.call(list || mapEmoticons(), key);
}

/**
*
* Fetch a random emoticon.
* @list[Object]: the emoticons map.
*
**/
function randomEmoticons(list) {
  var emoticons = list || mapEmoticons();
  var tags = Object.keys(emoticons);
  return fetchRandom(emoticons[fetchRandom(tags)]);
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