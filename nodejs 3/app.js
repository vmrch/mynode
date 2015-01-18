var express = require("express");
var app = express.createServer();
app.use(express.static(__diranme+"/public"));
app.use(app.router);
app.get("/",function(req,res){
    res.send("hello!")
});
app.listen(2000,host);