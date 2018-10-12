var express = require("express");
var bdParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;

var app = express();
app.listen(4000);

app.set("view engine","ejs");
app.use(bdParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.render("index")
})
//查询学生信息
app.get("/show",function(req,res){
  var url = "mongodb://localhost:27017"; //数据库地址
  mongoClient.connect(url,{useNewUrlParser: true},function(err,client){
    if(err){
      console.log(err);
      res.send("连接服务器失败");
      return;
    }
    var coll = client.db("web1807").collection("student");
    coll.find({}).toArray(function(err,docs){
      if(err){
        console.log(err);
        res.send("查询失败");
      }else{
        res.render("show",{docs:docs});
      }
      client.close();
    })
  })
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
          res.send("注册成功");
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

app.get("/del",function(req,res){
  res.render("del");
})

app.post("/del",function(req,res){
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
      console.log(json);
      coll.deleteOne(json,function(err,result){
         if(err){
          console.log(err);
          res.send("删除失败");
         }else{
           var delNum = result.result.n;
           if(delNum==0){
             res.send("请删除正确的数据");
           }else{
             res.send("删除成功");
            }
         }
         client.close();
      })
    }
  })
})
