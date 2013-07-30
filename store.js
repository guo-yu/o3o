// store
var fs = require('fs'),
    Store = JSON.parse(fs.readFileSync( __dirname + '/store.json'));
    
exports.check = function(type) {
    if (type && typeof(type) == 'string') {
        var list = [];
        for (var key in Store) {
            list.push(key);
        };
        if (list.indexOf(type) > -1) {
            return true
        } else {
            return false
        }
    } else {
        return false;
    }
}

exports.list = Store;