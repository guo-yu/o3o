// store
var yanwenzidata = require('./yanwenzidata').yanwenzidata;

var Store = {};

yanwenzidata.forEach(function(l) {
  l.text.split(" ").forEach(function(ll) {
    Store[ll] = l.yan;
  });
});

exports.check = function(type) {
	return Object.prototype.hasOwnProperty.call(Store, type);
};

exports.list = Store;
