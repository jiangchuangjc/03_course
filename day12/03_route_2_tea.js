//路由文件
var express = require("express");

//创建路由对象
var route1 = express.Router();

//使用路由处理请求

route1.get("/",function(req,res){
  res.send("这是teacher的/请求");
});

route1.get("/a",function(req,res){
  res.send("这是teacher的/a请求");
});

route1.get("/b",function(req,res){
  res.send("这是teacher的/b请求");
});

//暴露路由对象;
module.exports = route1;