// //引入加密模块
// var crypto = require("crypto");

// //定义一个密码123
// var pwd = "123";
// //ICy5YqxZB1uWSwcVLSNLcA==
// pwd += "abc";  //加盐加密
// //加密
// var str = crypto.createHash("md5").update(pwd).digest("base64");
// str = crypto.createHash("md5").update(str).digest("base64");
// console.log(str);

//使用封装的模块
var md5 = require("./md5/md5.js");
//机密普通的字符串
// var pwd = 123;
// var str = md5.mD5(pwd);
// console.log(str);
var fs = require("fs");
//提取文件的校验码(day19.txt);                                       
fs.readFile("../AAAAA",function(err,data){
  if(err){
    console.log(err);
  }else{
    var str = data.toString();  //转换字符串类型
    //获取md5码
    var digest = md5.mD5(str);
    console.log(digest);
  }
})

