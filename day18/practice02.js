var express = require("express");
var session = require("express-session");
var app = express();
app.listen(4000);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 365*24*60*60*1000 }
}));

app.set("view engine","ejs");

app.get("/",function(req,res){ 
  //查询session中是否有登录信息
  var session = req.session;
  console.log(session);
  //判断session中有没有登录的信息(登录的用户名);
  if(session.username){
    res.send("欢迎您,"+session.username+"<a href='/logout'>退出登录</a>");
  }else{
    //没有登录
    res.render("login");
  }
});

app.get("/login",function(req,res){
  //获取用户名和密码
  var name = req.query.username;
  var pwd = req.query.password;
  //判断用户名和密码是否正确
  if(name=="jiangchuang"&&pwd==123){
    //用户名和密码正确,登录成功
    //保存登录信息
    req.session.username=name;
    res.redirect("/"); 
  }else{
    res.send("登录失败");
  }   
})

//处理/logout请求,退出登录
app.get("/logout",function(req,res){
  req.session.destroy(function(err) {
    if(err){
      res.send("退出失败");
    }else{
      res.redirect("/");
    }
  })
})