var request = require("request");

request("https://www.baidu.com/",function(err,response,body){
  console.log(err);
  console.log("==========================");
  console.log(response);
  console.log("======================");
  console.log(body);
})