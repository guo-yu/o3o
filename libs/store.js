// store
var yans = require('../yan.json').list;

exports.list = function() {
    var Store = {};
    Store['available'] = [];
    yans.forEach(function(line) {
        Store.available.push(line.tag);
        line.tag.split(" ").forEach(function(tag) {
            if (typeof Store[tag] == 'undefined') {
                Store[tag] = line.yan;
            } else {
                Store[tag] = Store[tag].concat(line.yan);
            }
        });
    });
    return Store;
};

exports.check = function(type) {
    var Store = exports.list();
	return Object.prototype.hasOwnProperty.call(Store, type);
};