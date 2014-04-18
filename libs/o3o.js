var chance = require('chance');
var yans = require('../yan').list;

module.exports = o3o;

function o3o(type) {
  if (!type) return null;
  var emoticons = list();
  if (type === 'tags') return emoticons.available;
  if (!checkAvailable(type)) return null;
  return emoticons[type][new chance().integer({
    min: 0,
    max: emoticons.length - 1
  })];
}

function list() {
  var Store = {};
  Store.available = [];
  yans.forEach(function(line) {
    Store.available.push(line.tag);
    line.tag.split(" ").forEach(function(tag) {
      Store[tag] = (typeof Store[tag] == 'undefined') ?
        line.yan :
        Store[tag].concat(line.yan);
    });
  });
  return Store;
}

function checkAvailable(type) {
  var Store = list();
  return Object.prototype.hasOwnProperty.call(Store, type);
}