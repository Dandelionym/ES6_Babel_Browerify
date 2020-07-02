/*
* 主js文件，用于汇总各个module
* */

// 在es6的模块化规范中，用哪一种方式引入，取决于用什么方式暴露


// module1 分别暴露的
// import {data, demo, test} from './module1';
import * as m1 from './module1'

// module2 统一暴露的
import {demo2, test2} from "./module2";

// module3 默认暴露的
import module3 from './module3';


console.log(data);
m1.demo1();
m1.test1();
demo2();
test2();
module3.speak();
