var express = require('express');
var session = require("express-session");
var app = express();
app.listen(4000);

//配置session
app.use(session({
  secret:"keybord cat",
  resave:false,
  saveUninitialized:true,
  cookie:{maxAge:10000000}
}));

//处理 /search请求,每一次都将用户搜索的结果全部显示在页面上
app.get("/search",function(req,res){
  //获取搜索的参数
  var name = req.query.name;
  //获取session中曾经保存的history
  var history = req.session.history || [];
  //判断输入的参数是不是undefined或者是空字符串
  //如果是,就不做操作,如果不是,就添加到历史数组中
  if(!(name==undefined || name.trim()=="")){
        console.log(name);
        if(history.length==0){
          history.push(name);
        }else{
          var flag = false;
          for(var i=0;i<history.length;i++){
            if(name==history[i]){
              flag = true;
              break
            }
          }
          if(!flag){
            history.push(name);
          }else{
            history = history;
        }
      }
    }
  //将history保存进session
  req.session.history = history;
  //将历史记录显示在页面上
  res.send(history);
})