/*
* 分别暴露
* */


export let data = 'dandelion';

export function test1() {
    console.log("我是module1的text函数,  ", data.toLowerCase())
}

export function demo1() {
    console.log("我是module1的demo函数, ", data.toUpperCase())
}
