/*
* 统一暴露
* */

let arr = [2, 4, 6, 8]   // 私有数组，不可以暴露的


function demo2() {
    console.log("我是模块2的demo2函数", arr)
}

function test2() {
    console.log("我是模块2的test2函数", arr)
}

export {demo2, test2}
