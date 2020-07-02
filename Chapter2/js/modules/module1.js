/*
* 定义一个没有依赖的module1
* */

// define中的函数是回调函数

define(function () {
    let data = 'Peiqi'; // 只读

    function getDataUp() {
        return data.toUpperCase()
    }

    function getDataLo() {
        return data.toLowerCase()
    }

    return {getDataUp, getDataLo}
});

