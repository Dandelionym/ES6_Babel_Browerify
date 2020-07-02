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