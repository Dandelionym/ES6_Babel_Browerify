/**
 * 在AMD模块化文件中，主js文件，也就是入口文件需要写一个特殊的配置，作为配置对象
 */


requirejs.config({
    baseUrl: './js/modules/',           // baseUrl, 从index目录开始找
    // 在项目中所有用到的模块，都要在这儿注册
    paths: {
        module1: './modules/module1',
        module2: './modules/module2',
        jquery: './lib/jquery-3.4.1'
    }
});


requirejs(['module2', 'jquery'], function (m2, $) {
    console.log(m2());
    $('body').css('background', 'skyblue')
});
