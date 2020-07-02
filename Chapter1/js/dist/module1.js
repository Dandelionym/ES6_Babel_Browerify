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