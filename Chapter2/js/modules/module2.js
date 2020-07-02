/*
* 定义一个有依赖的module2， 依赖于module1
* */

// 依赖于谁，就要声明谁

define(['module1'], function (module1) {
    let msg = '0719很棒棒！';

    function getDataAndMsg() {
        return module1.getDataLo()+msg
    }

    return getDataAndMsg
});
