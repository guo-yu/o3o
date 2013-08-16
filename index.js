//         _____     
//   ____ |__  /____ 
//  / __ \ /_ </ __ \
// / /_/ /__/ / /_/ /
// \____/____/\____/ 
//
// ascii emoticon store based on Node.js

var store = require('./store'),
    optimist = require('optimist'),
    argv = optimist.argv,
    Chance = require('chance');

exports.fetch = function(type) {
    if (store.check(type)) {
        var list = store.list[type],
            chance = new Chance(),
            one = chance.integer({
                min: 0,
                max: list.length - 1
            });
        return list[one];
    } else {
        return false;
    }
}

exports.available = function() {
    return store.list.available;
}

exports.cli = function() {
    var type = argv._;
    var fail = exports.fetch('摊手') + '没有这个情绪类别哦。。要不你帮我加上？欢迎fork && PR：https://github.com/turingou/o3o';
    if (type.length == 1) {
        if (type[0] == 'ls') {
            console.log(exports.available())
        } else {
            var s = exports.fetch(type[0]);
            if (s) {

                if (argv.gbk) {
                    require('copy-paste');
                    var Iconv = require('iconv').Iconv;
                    var iconv = new Iconv('UTF-8', 'GBK//IGNORE');

                    s = iconv.convert(s);
                }

                process.stdout.write(s);

                return false;
            } else {
                console.log(fail)
            }
        }
    } else {
        console.log(fail)
    }
}