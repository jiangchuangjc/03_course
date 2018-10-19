var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
//设置cookie解析方式
app.use(cookieParser());
app.listen(4000);

app.set("view engine","ejs");

app.get("/",function(req,res){ 
  //查询cookie中是否有登录信息
  var cookies = req.cookies;
  //判断cookie中有没有登录的信息(登录的用户名);
  if(cookies.username){
    res.send("欢迎您"+cookies.username);
  }else{
    //没有登录
    res.render("login");
  }
})

app.get("/login",function(req,res){
  //获取用户名和密码
  var name = req.query.username;
  var pwd = req.query.password;
  //判断用户名和密码是否正确
  if(name=="jiangchuang"&&pwd==123){
    //用户名和密码正确,登录成功
    //保存登录信息
    res.cookie("username",name);
    res.redirect("/"); 
  }else{
    res.send("登录失败");
  }   
})