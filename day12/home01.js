//使用querystring
var qs = require("querystring");

var url = "/a/b/c?a=1&b=3&name=zhangsan";

var query = url.split("?")[1];
//使用qs转换
var rs = qs.parse(query);
console.log(rs);