var readline = require('readline');
var optimist = require('optimist');
var iconv = require('iconv').Iconv;
var argv = optimist.argv;
var o3o = require('../index');
var pkg = request('../package');

function convertToGBK(s) {
  return new iconv('UTF-8', 'GBK//IGNORE').convert(s);
}

function cliResponse(type) {
  var fail = o3o('摊手') + '没有这个情绪类别哦。。要不帮我加上？欢迎 fork & PR：' + pkg.repository.url;
  if (type == 'ls') {
    var s = JSON.stringify(o3o('tags'), null, 4);
    if (argv.gbk) s = convertToGBK(s);
    process.stdout.write(s);
  } else {
    var s = o3o(type);
    if (!s) return console.log(fail);
    if (argv.gbk) s = convertToGBK(s);
    process.stdout.write(s);
  }
}

module.exports = function() {
  if (!argv.stdin) return cliResponse(argv._[0]);
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('', function(type) {
    rl.close();
    cliResponse(type.trim());
  });
}