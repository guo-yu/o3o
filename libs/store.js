// store
var yans = require('../yan.json').list;

exports.list = function() {
    var Store = {};
    Store['available'] = [];
    yans.forEach(function(line) {
        Store.available.push(line.tag);
        line.tag.split(" ").forEach(function(tag) {
            Store[tag] = (typeof Store[tag] == 'undefined') ? 
            line.yan : 
            Store[tag].concat(line.yan);
        });
    });
    return Store;
};

exports.check = function(type) {
    var Store = exports.list();
	return Object.prototype.hasOwnProperty.call(Store, type);
};