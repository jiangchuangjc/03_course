require("./b.js");
console.log("这是a.js的内容");
var a = 12;
function b(){
  console.log("这是a.js的方法b");
}
//expotrs.暴露的名称 = 定义的名称
// 暴露的名称是给外部文件使用的
// 定义的名称是内部自己定义的变量或方法名
exports.aa = a;
exports.bb = b;