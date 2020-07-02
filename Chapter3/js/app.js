/*
*   主JS文件，用于汇总各个模块
* */


define(function (require) {
    let module4 = require('./modules/module4');
    let module1 = require('./modules/module1');

    module1.getData();
    module4.getData();
});
