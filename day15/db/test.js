var db = require("./db.js");

//测试查找所有数据
// db.findAll("student",function(err,docs){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(docs);
//   }
// })

//测试添加数据
// var data = {id:112,name:"张学友",age:55};
// db.add("student",data,function(err,result){
//   console.log(err);
//   console.log(result);
// })

//测试修改数据
// var filter = {id:101};
// var data = {name:'jacklove'};
// db.modify("student",filter,data,function(err,result){
//   console.log(err);
//   console.log(result);
// })

//测试删除数据
// db.del("student",{id:111},function(err,result){
//      console.log(err);
//      console.log(result);
// })

db.find("student",{id:{$lt:103}},function(err,docs){
   console.log(err);
   console.log(docs);
})