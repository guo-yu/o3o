var clipboard = require('copy-paste');
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
  // fetch random type
  if (!type) {
    var emoticon = o3o('*');
    return clipboard.copy(emoticon, function() {
      console.log(emoticon);
    });
  }
  // list all tags
  if (type == 'ls' || type == 'list') {
    return console.log(o3o());
  }
  // fetch spec type
  var emoticon = o3o(type);
  // if not found, return fail message
  if (!emoticon) return notfound();

  return clipboard.copy(emoticon, function() {
    console.log(emoticon);
  });
}