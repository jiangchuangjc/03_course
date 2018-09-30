var fd = require('formidable');
var http = require("http");
var fs = require('fs');
var server = http.createServer(function (req, res) {
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  if (req.url == '/favicon.ico') {
    return;
  }
  if(req.url == "/"){
    fs.readFile('./01_form.html',function(err,data){
      if(err){
        console.log(err);
        res.end("加载页面失败");
        return;
      }
      //读取成功,显示页面
      res.end(data);
    })
  }else if(req.url == "/submit" && req.method.toUpperCase()=="POST"){
     //post的/submit请求
     //使用formidable模块处理请求
     //创建表单对象
     var form = new fd.IncomingForm();

     //解析请求对象
     //err:解析出错的错误信息
     //fields:解析得到的文本域的参数值
     //files:解析得到的文件
    form.parse(req, function(err, fields, files) {
      if(err){
         console.log(err);
         res.end("请求失败");
         return;
      }
      console.log("=======fields:=========");
      console.log(fields);
      console.log("=======files=========");
      console.log(files);
      res.end("请求成功");
    });
  }else{
    res.end("地址错误");
  }
});
server.listen(4000, 'localhost');