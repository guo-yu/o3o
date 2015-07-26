## o3o ![npm](https://badge.fury.io/js/o3o.png)

a ascii emoticon generator based on Node.js (＞ω＜)

![screenshot](http://ww4.sinaimg.cn/large/61ff0de3gw1efjv5irqm0j20ln0fi75q.jpg)

### Installation
````
$ npm install o3o
````

### Example
````javascript
var o3o = require('o3o');

var smile = o3o('smile');
var cry = o3o('cry');

console.log('%s %s', smile, cry); // => (●'◡'●)ﾉ♥ π__π
````

### Cli Useage
o3o also provides a command line tool to generate ascii emoticons. when using command line tool, o3o supports copy the emoticon to clipboard in both OSX, linux and Windows by default.

````
// to use cli, install as a global module:
$ [sudo] npm install o3o -g 

// seach emoticons by tag:
$ o3o smile // => ＾∀＾

// list all available tags:
$ o3o ls
````

### API

#### o3o(type);
- `type` [String] :
  - `null`: list all available `tags` to search, return `Array`;
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

Wanna more ? check out [yan.json](https://github.com/turingou/o3o/blob/master/yan.json) and type `tag` to search

### Rebounds
- [o3o Workflow for Alfred 2](http://lucifr.com/2013/08/01/o3o-workflow-for-alfred/) by lucifr
- [o3o based on Ruby](https://github.com/coolzilj/o3o) by [coolzilj](https://github.com/coolzilj)
- [o3o based on Go](https://github.com/mozillazg/go-o3o) by [mozillazg](https://github.com/mozillazg)

### Tests
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

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.2
