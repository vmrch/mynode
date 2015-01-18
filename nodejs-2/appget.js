var express = require("express");
var app = express();
//var bodyParser = require('body-parser');
var http =require("http");
//app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));
//app.use(app.router);
app.get("/",function(req,res){
    res.send("hello! wahts up")
});
app.get("/name",function(req,res){
    res.send("hello! wahts up name is ven")
});
app.get("/:name", function(req,res) {
	res.send("hi this is good,i am sending parameters"+req.params.name);
	
});
app.get("/:name/:name1",function(req,res) {
	 console.log(req.params);
	 Object.keys(req.params).forEach(function(key){
		console.log("key ="+key);
	 });
	res.send("hi you are good, i am sending parameters"+req.params.name +" "+req.params.name1);
});
app.get("/\d\+/:name1",function(req,res) {
	 console.log(req.params);
	 Object.keys(req.params).forEach(function(key){
		console.log("key ="+key);
	 });
	res.send("hi you are good, i am sending parameters"+req.params.name +" "+req.params.name1);
});
// app.post("/postExample", function(req,res){
// 	//console.log(req);
// 	console.log("==="+ JSON.stringify(req.body));
// 	res.send("hi how ae you post request")
// })
var server = http.createServer(app);
app.listen(2000,'localhost');