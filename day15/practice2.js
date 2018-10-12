var express = require("express");
var bdParser = require("body-parser");
var MongoClient =  require("mongodb").MongoClient;
var app = express();
app.listen(4000);

app.set("view engine","ejs");

//设置请求解析的方式 application/x-www-form -urlencoded
app.use(bdParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.render("login");
})

//处理post发送的请求
app.post("/login",function(req,res){
  var params = req.body;
  // console.log(params);
  var username = params.username;  //获取用户名
  var pwd = params.password;  //获取密码
  
  //将需要保存进数据库的数据组合成一个新的json对象
  var json = {name:username,pwd:pwd};
  
  //连接数据库,保存数据
  var url = "mongodb://localhost:27017"; //数据库地址
  MongoClient.connect(url,{useNewUrlParser: true},function(err,client){
    if(err){
      //连接服务器失败
      console.log(err);
      console.log("连接服务器失败");
      return;
    }
    //没有出错,连接成功
    //通过cilent获取数据库   
    //获取集合
    var coll = client.db("web1807").collection("student");
    // //向集合中插入数据
    console.log(json);
    coll.find(json).toArray(function(err,docs){
      if(err){
        console.log(err);
        res.send("登录失败");
      }else{
        console.log(docs);
        if(docs.length>0){
          res.send("登录成功");
        }else{
          res.send("登录失败,用户名或者密码错误");
        }
      }        
      client.close();
    })
  })
})