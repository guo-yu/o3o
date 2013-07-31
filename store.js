// store
var yans = require('./yan.json').list;

exports.createList = function() {
    var Store = {};
    yans.forEach(function(l) {
      l.tag.split(" ").forEach(function(ll) {
        Store[ll] = l.yan;
      });
    });
    return Store;
};

exports.check = function(type) {
    var Store = exports.createList();
	return Object.prototype.hasOwnProperty.call(Store, type);
};

exports.list = exports.createList();
