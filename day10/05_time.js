//使用别人的模块格式化时间
//引入模块
var sd = require('silly-datetime');

//获取当前事件
var now = new Date();

//格式化时间
var str = sd.format(now,'YYYY-MM-DD HH:mm:ss');
console.log(str);

