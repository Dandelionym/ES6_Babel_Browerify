/*
* 默认暴露, 只能暴露一次
* */

export default {
    name: 'peiqi',
    age: 18,
    speak(){
        setTimeout(()=>{
            console.log(`我的名字是${this.name}， 年龄是${this.age}`)
        }, 1000)
    }
}

