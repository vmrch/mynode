var express = require("express");
var app = express();
//var bodyParser = require('body-parser');
var http =require("http");
//app.use(bodyParser.json());

// app.set('views', path.join(__dirname+'views'));
// app.set('view engine','jade');
// app.set("name","ven");

// console.log(app.get("name"));
// app.use(logger('name'));
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
app.get("/:name/:name1", function(req,res) {
	console.log(req.params);
	object.keys(req.params).forEach(function(key){
		console.log("key ="+key);
	});
	res.send("hi this is good, i am sending parameters"+req.params.name 
		+" "+req.params.key);
});
// app.post("/postExample", function(req,res){
// 	//console.log(req);
// 	console.log("==="+ JSON.stringify(req.body));
// 	res.send("hi how ae you post request")
// })
var server = http.createServer(app);
app.listen(2000,'localhost');