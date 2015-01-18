var express = require("express");
var app = express()
var bodyParser = require('body-parser');
var http =require("http");
//app.use(bodyParser);
app.use(express.static(__dirname+"/public"));
//app.use(app.router);
app.get("/",function(req,res){
    res.send("hello! wahts up")
});
app.get("/name",function(req,res){
    res.send("hello! wahts up name is ven")
});

app.post("/postExample", function(req,res){
	//console.log(req);
	//console.log("==="+ JSON.stringify(req.body));
	//xconsole.log("==="+(req.body)+ req.query.empid);
console.log(req.params);
	//res.send("hi how ae you post request")
	// var name = req.body.name
	// var age = req.body.age
	//res.send("hi how ae you post request")
	//res.json({"status":"s","msg":"hi how r u?",
               //   "empid":"req.params.empid",
//                  "name":req.params.name
                 //"name":req.body.name
//});
});
var server = http.createServer(app);
app.listen(2000,'localhost');