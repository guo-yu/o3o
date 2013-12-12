o3o ![npm](https://badge.fury.io/js/o3o.png)
--- 

(＞ω＜) ascii emoticon generator based on Node.js

![screenshot](http://ww4.sinaimg.cn/large/61ff0de3gw1e760rs12a6j20ln0fbq52.jpg)
### How to install

````
$ npm install o3o
````

### Sample code

````javascript
var o3o = require('o3o');

console.log(o3o.fetch('smile')); // will output (●'◡'●)ﾉ♥
console.log(o3o.fetch('cry')); // will output π__π
````

### Use CLI
````
$ sudo npm install o3o -g
$ o3o smile
$ ＾∀＾ 

// list all available tags
$ o3o ls // short of list
// results
['laugh 笑',
  'wanna',
  'chill 摊手 手',
  'smile',
  'angry 生气 上火 恼 怒 疯 啊 草 cao 靠 kao',
  '猪 zhu pig',
  'sorry 错 道歉 该打 跪 cuo'
  ...... ]

// or random
$ o3o available // list ONLY one available type
// result
song sing 唱 歌
````

### Copy to clipboard with CLI (Windows and OSX)

```
o3o smile --gbk|clip
```

### API

#### o3o.fetch(type) 

- `type` [String] :
    - smile ＾∀＾
    - laugh (/≥▽≤/)
    - anger o(￣ヘ￣o＃)
    - cry ಥ_ಥ
    - wtf （╯－＿－）╯╧╧
    - surprise （°ο°）
    - chill ╮(╯_╰)╭
    - shy o(*////▽////*)q
    - wanna ˋ▽ˊ
    - kiss (╭￣3￣)╭♡
    - bye (｡･ω･)ﾉﾞ
    - wanna more ? check out [yan.json](https://github.com/turingou/o3o/blob/master/yan.json) and type `tag` to search

### o3o.available()

- `return` [Array] list all available `tags` to search

### Pull Request Welcome !

- fork this repo
- feel free to add your feature or emoticons
- make sure your feature are fully tested!
- send me a PR, and enjoy !

### Rebound

- [o3o Workflow for Alfred 2](http://lucifr.com/2013/08/01/o3o-workflow-for-alfred/) by lucifr
- [o3o based on Ruby](https://github.com/coolzilj/o3o) by [coolzilj](https://github.com/coolzilj)

### Run unit-test (Mocha)

````
$ git clone https://github.com/turingou/o3o.git
$ cd o3o
$ npm install 
$ npm test
````

### Changelog

- `0.0.6` clipboard supported(both OSX and Windows), thx [@flynngao](https://github.com/flynngao) and [@breeswish](https://github.com/breeswish)
- `0.0.5` support list all available emoticons
- `0.0.4` thx [@sivaGao](https://github.com/ghlndsl) , more than 1000 emoticons added !!