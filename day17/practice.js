var express = require("express");
var app = express();
app.listen(4000);

//访问/请求,服务器生成cookie发送给浏览器,浏览器保存cookie

app.set("view engine","ejs");
app.get("/",function(req,res){
  res.render("login");
})
app.get("/login",function(req,res){
  var name = req.query.username;
  var pwd = req.query.password;
  if(name=="zhangsan"&&pwd==123){
    //跳转到登录成功页面之前,先保存登录状态
    res.cookie("username",name,{maxAge:10000});
    res.send("登录成功");
  }else{
    res.send("登录失败");
  }
})