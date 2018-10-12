var express = require("express");
var bdParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;
var dbMethod = require("../day15/db/db.js");
var app = express();
app.listen(4000);

app.set("view engine","ejs");
app.use(bdParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.render("index")
})

app.get("/regist",function(req,res){
  res.render("regist");
})

app.post("/regist",function(req,res){
  var name = req.body.username;
  var pwd = req.body.password;
  var json = {name:name,pwd:pwd};
  var url = "mongodb://localhost:27017"; //数据库地址
  mongoClient.connect(url,{useNewUrlParser: true},function(err,client){
    if(err){
      console.log(err);
      res.send("连接服务器失败");
    }else{
      var coll = client.db("web1807").collection("student");
      coll.insertOne(json,function(err,result){
        if(err){
          console.log(err);
          res.send("注册失败,请重试");
        }else{
          console.log(result);
          // res.send("注册成功");
          res.redirect("/login")
        }
        client.close();
      })
    }
  })
})

app.get("/login",function(req,res){
  res.render("login");
})

app.post("/login",function(req,res){
  var name = req.body.username;
  var pwd = req.body.password;
  var json = {name:name,pwd:pwd};
  var url = "mongodb://localhost:27017"; //数据库地址
  mongoClient.connect(url,{useNewUrlParser: true},function(err,client){
    if(err){
      console.log(err);
      res.send("连接服务器失败");
    }else{
      var coll = client.db("web1807").collection("student");
      coll.find(json).toArray(function(err,docs){
        if(err){
          console.log(err);
          res.send("登录失败");
        }else{
          console.log(docs);
          if(docs.length>0){
            res.send("登录成功");
          }else{
            res.send("登录失败,用户名或密码错误!");
          }
        }
        client.close();
      })
    }
  })
})

app.get("/msg",function(req,res){
  // res.render("message");
  // res.send("1111111")
  var url = "mongodb://localhost:27017"; //数据库地址
  mongoClient.connect(url,{useNewUrlParser: true},function(err,client){
    if(err){
      console.log(err);
      res.send("连接服务器失败");
    }else{
      var coll = client.db("web1807").collection("student");
      coll.find().toArray(function(err,docs){
        if(err){
          console.log(err);
          res.send("登录失败");
        }else{
          res.render("message",{docs:docs})
        }
        client.close();
      })
    }
  })
})

app.post("/msg",function(req,res){
  var name = req.body.username;
  var msg = req.body.msg;
  var json = {name:name,msg:msg};
  console.log(req.body.time);
  var url = "mongodb://localhost:27017"; //数据库地址
  mongoClient.connect(url,{useNewUrlParser: true},function(err,client){
    if(err){
      console.log(err);
      res.send("连接服务器失败");
    }else{
      var coll = client.db("web1807").collection("student");
      coll.insertOne(json,function(err,result){
        if(err){
          console.log(err);
          res.send("留言失败,请重试");
        }else{
          console.log(result);
          res.send("留言成功");
        }
        client.close();
      })
    }
  })
})

