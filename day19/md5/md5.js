//引入加密模块
var crypto = require("crypto");

exports.mD5 = function(pwd){
  pwd += "abc";
  var str = crypto.createHash("md5").update(pwd).digest("base64");
  //将第一次加密得到的密文截取一部分
  str = str.substr(5,10);
  //加密截取的部分密文
  var str = crypto.createHash("md5").update(str).digest("base64");
  return str;
}