var o3o = require('../index');
var pkg = require('../package');

function notfound() {
  var fail = o3o('摊手') + 
  ' 没有这个情绪类别哦。。\n要不帮我加上？欢迎 Fork & PR 项目地址: ' + 
  pkg.repository.url;
  return console.log(fail);
}

module.exports = function() {
  var type = process.argv[2];
  if (!type) return console.log(o3o('*'));
  if (type == 'ls' || type == 'list') return console.log(o3o());
  var emoticon = o3o(type);
  if (!emoticon) return notfound();
  return console.log(emoticon);
}