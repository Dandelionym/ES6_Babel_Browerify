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