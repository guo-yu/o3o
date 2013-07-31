# o3o ![npm](https://badge.fury.io/js/o3o.png)

(＞ω＜) ascii emoticon store based on Node.js

## How to install

````
$ npm install o3o
````

## Sample code

````javascript
var o3o = require('o3o');

console.log(o3o.fetch('smile')); // will output (●'◡'●)ﾉ♥
console.log(o3o.fetch('cry')); // will output π__π
````

## Use CLI
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

## API

### o3o.fetch(type) 

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
    - return [Array] list all available `tags` to search

## Run unit-test (Mocha)

````
$ git clone https://github.com/turingou/o3o.git
$ cd o3o
$ npm install 
$ npm test
````

## Changelog

- `0.0.5` support list all available emoticons
- `0.0.4` thx [@sivaGao](https://github.com/ghlndsl) , more than 1000 emoticons added !!