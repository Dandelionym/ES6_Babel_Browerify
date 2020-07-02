(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// module2 统一暴露的
console.log(_module.data);

// module3 默认暴露的
/*
* 主js文件，用于汇总各个module
* */

// 在es6的模块化规范中，用哪一种方式引入，取决于用什么方式暴露


// module1 分别暴露的

(0, _module.demo)();
(0, _module.test)();
(0, _module2.demo2)();
(0, _module2.test2)();
_module4.default.speak();
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = test;
exports.demo = demo;
/*
* 分别暴露
* */

var data = exports.data = 'dandelion';

function test() {
    console.log("我是module1的text函数,  ", data.toLowerCase());
}

function demo() {
    console.log("我是module1的demo函数, ", data.toUpperCase());
}
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
* 统一暴露
* */

var arr = [2, 4, 6, 8]; // 私有数组，不可以暴露的


function demo2() {
    console.log("我是模块2的demo2函数", arr);
}

function test2() {
    console.log("我是模块2的test2函数", arr);
}

exports.demo2 = demo2;
exports.test2 = test2;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
* 默认暴露, 只能暴露一次
* */

exports.default = {
    name: 'peiqi',
    age: 18,
    speak: function speak() {
        var _this = this;

        setTimeout(function () {
            console.log('\u6211\u7684\u540D\u5B57\u662F' + _this.name + '\uFF0C \u5E74\u9F84\u662F' + _this.age);
        }, 1000);
    }
};
},{}]},{},[1]);
