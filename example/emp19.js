Person.prototype = {
  say: function () {
    console.log('I am saying');
  }
}

//  构造函数
function Person () {

   this.name = 'lyl';
   this.age = 18;
   // 打印this对象的原型
   console.log(this.__proto__); // 
   // 验证this是否是Person构造函数的实例
   console.log(this instanceof Person); //true
}
new Person();//打印结果如下
//  Object say: ()__proto__: Object
// true

Person();//打印结果如下
//  Window
// false