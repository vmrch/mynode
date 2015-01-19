var express = require("express");
var app = express();
var http =require("http");
app.use(express.static(__dirname+"/public"));
//app.use(app.router);
app.get("/",function(req,res){
    res.send("hello!how r u?")
});
var server = http.createServer(app);
app.listen(2040,'localhost');