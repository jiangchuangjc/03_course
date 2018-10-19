var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
//设置cookie解析方式
app.use(cookieParser());
app.listen(4000);

app.get("/",function(req,res){
  res.send("这是首页");
});

//设置cookie
app.get("/setCookie",function(req,res){
  //设置两个cookie
  res.cookie("username","jiangchuang");
  res.cookie("password",123);
  res.send("这是cookie");
})

//获取cookie
app.get("/getCookie",function(req,res){
  console.log(req.cookies);
  console.log(req.cookies.username);
  console.log(req.cookies.password);
  res.send("获取成功");
})
