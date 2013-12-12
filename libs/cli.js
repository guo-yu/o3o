var optimist = require('optimist'),
    argv = optimist.argv,
    o3o = require('../index');

var convertToGBK = function(s) {
    var Iconv = require('iconv').Iconv;
    var iconv = new Iconv('UTF-8', 'GBK//IGNORE');
    return iconv.convert(s);
};

var cliResponse = function(type) {
    var fail = o3o.fetch('摊手') + '没有这个情绪类别哦。。要不你帮我加上？欢迎fork && PR：https://github.com/turingou/o3o';
    if (type == 'ls') {
        var s = JSON.stringify(o3o.available(), null, 4);
        if (argv.gbk) {
            s = convertToGBK(s);
        }
        process.stdout.write(s);
    } else {
        var s = o3o.fetch(type);
        if (s) {
            if (argv.gbk) {
                s = convertToGBK(s)
            }
            process.stdout.write(s);
        } else {
            console.log(fail);
        }
    }
};

exports = module.exports = function() {
    if (argv.stdin) {
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('', function(type) {
            rl.close();
            cliResponse(type.trim());
        });
    } else {
        cliResponse(argv._[0]);
    }
};