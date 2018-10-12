var express = require("express");
var bdParser = require("body-parser");
var mongoClient = require("mongodb").MongoClient;
var db = require("../day15/db/db.js");
var sd = require('silly-datetime');
var app = express();
app.listen(4000);

app.set("view engine","ejs");
app.use(bdParser.urlencoded({extended:true}));

// app.get("/",function(req,res){
//   res.render("message",{docs:[]});
// })

app.get("/",function(req,res){ 
  db.find("student",function(err,docs){
    if(err){
      console.log(err);
    }else{
      res.render("index",{docs:docs});
    }
  })
})

app.post("/msg",function(req,res){
  var name = req.body.username;
  var msg = req.body.msg;
  var time = sd.format(new Date(),'YYYY-MM-DD HH:mm:ss');
  var json = {name:name,msg:msg,time:time};
  db.add("student",json,function(err,result){
    if(err){
      console.log(err);
    }else{
      res.redirect("/");
    }
  })
})
// 
app.get("/update",function(req,res){
  // console.log(req.params);
  // res.render("update"); 
  db.find("student",function(err,docs){
    if(err){
      console.log(err);
    }else{
      res.render("update",{docs:docs});
      console.log(docs);
    }
  })
})
