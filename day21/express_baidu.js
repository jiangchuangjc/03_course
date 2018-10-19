var express = require("express")();

var request = require("request");
app.listen(4000);

app.get("/",function(req,res){
    request("https://www.baidu.com",function(err,response,body){
      res.send(body);
  })  
})

