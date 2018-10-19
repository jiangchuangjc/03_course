
var persopn = function(){
  this.name = "人类"
  this.age = 18
  this.say = function(){
      console.log(this.name,this.age)
  }
}


/**
* 构造函数采用new关键字实例化对象
*/
var persopns = function(){
  this.name ="外星人"
}
persopns.prototype =  new persopn()

persopns();



