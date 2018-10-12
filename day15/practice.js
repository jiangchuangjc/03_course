var MongoClient =  require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var dbName = "web1807";
var collection = "student";

MongoClient.connect(url,{useNewUrlParser: true},function(err,client){
  if(err){
    console.log(err);
  }else{
    var db = client.db(dbName);
    var coll = db.collection(collection);
    //查看数据库的数据
    coll.find({id:102}).toArray(function(err,docs){
      if(err){
        console.log(err);
      }else{
        console.log(docs);
      }        
      client.close();
    })
    
    
    //修改数据库的数据
    // coll.updateMany({id:101},{$set:{age:100}},function(err,result){
    //   if(err){
    //     console.log(err);
    //   }else{
    //     console.log(result);
    //   }  
    //   client.close();   
    // })
  }
})