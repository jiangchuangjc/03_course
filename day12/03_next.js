var express = require("express");
var app = express();
app.listen(4000);

// app.use(function(req,res,next){
//   if(req.url == "/a"){//当请求路径为/a时不处理,让后面的路由处理
//     next();
//   }else{
//     res.send("get / 请求");
//   }
// });

app.get("/a/123",function(req,res){
  res.send("get /a 的学号是123");
});

//参数的传递与获取,与ng路由相似
//:后面的会当成参数的属性,获取时,通过req来获取
//带有参数时,请求路径不固定,尽量将精确匹配的路径写在上面,模糊匹配写在下面
app.get("/a/:id",function(req,res){
  // console.log(req);
  var id = req.params.id;
  console.log(id);
  res.send("get /a 请求:"+id);
});

//使用正则匹配
//匹配 /aaa/123 3个字母,3个数字的请求
app.get(/^\/([a-z]{3})\/([0-9]{3})$/,function(req,res){
  // console.log(req.url);
  // console.log(req.url.split("/")[1]);
  // console.log(req.url.split("/")[2]);
  console.log(req.params[0]);
   res.send("符合规范");
})


