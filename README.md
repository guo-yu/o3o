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

## Run unit-test (Mocha)

````
$ git clone https://github.com/turingou/o3o.git
$ cd o3o
$ npm install 
$ npm test
````

## Changelog

- `0.0.4` thx @sivaGao , more than 1000 emoticons added !!