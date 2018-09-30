//1.引入express模块
var express = require('express');
//2.创建app应用对象
var app = express();
//3.监听端口
app.listen(4000);

//设置视图引擎.
app.set("view engine","ejs");

app.get("/",function(req,res){
  res.send('这是首页');
});

app.get("/info",function(req,res){
  //模拟的数据
  var data = {stus:['jack','rose','mike','jerry']};
  res.render('04',data);
})