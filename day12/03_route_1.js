var express = require("express");
var app = express();
//引入路由文件
var route = require("./03_route.js");
app.listen(4000);

// app.use("/",route.index);
//上面的写法简写:
// app.use(route.index);

app.get("/",route.index);
app.get("/info",route.info);
app.get("/error",route.error);

