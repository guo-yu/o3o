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
    color = require('cli-color');

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
    var fail = exports.fetch('摊手') + '没有这个情绪类别哦。。要不你帮我加上？欢迎fork && PR：https://github.com/turingou/o3o' + "\n 用ls或list看看现在有什么哦";
    if (type.length >= 1) {
        if (type[0] == 'ls' || type[0] == 'list') {
            console.log(exports.available())
        } else {
            var print = "";
            for(var i in type){
                
                var s = exports.fetch(type[i]);
                if (s) {
                    print += (s + "\n");
                } else {
                    console.log(fail)
                    return false;
                }
                
            }    
            console.log(print);
        }
    } else {
        console.log(fail)

    }
}