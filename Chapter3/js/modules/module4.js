/*
*  定义一个有依赖的模块，module4，依赖于module2，module3
* */

define(function (require, exports, module) {
    let data = '--------module4--------';

    // 引入module2-----同步
    let module2 = require('./module2');
    module2.getData();

    // 引入module3-----异步
    require.async('./module3', function (m3) {
        m3.getData()
    });

    function getData() {
        console.log(data)
    }
    module.exports = {getData}
});
