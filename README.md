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

## API

### o3o.fetch(type) 

- `type` [String] :
    - smile
    - laugh
    - cheer
    - sad
    - cry
    - wtf
    - surprise
    - chill
    - shy
    - wanna
    - release

## Run unit-text (Mocha)

````
$ git clone https://github.com/turingou/o3o.git
$ cd o3o
$ npm install 
$ npm test
````