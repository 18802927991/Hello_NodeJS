const  express = require('express');
var cors = require("cors");
var router = require('./router');
var app = express();

app.use("/",cors(),router);

if(!module.parent){
    app.listen('3003',function(){ //3003是端口号，可以自己设置
        console.log("服务器开启了");
    });
}
module.exports = app;


