var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var userMgmt = require('.routes/usermgment.js');

var events = require('events');
var app = express();

var serverStartup = new events.EventEmitter();

console.log("wats up");
serverStartup.on('dbconnected', function(){
	console.log('on dbConnected seen!');
});

require('c:\\retailer\\lib\\dbConnection')(serverstartup);
//view engine setup
app.set('views',path.join(_dirname, 'views'));
app.set('view engine','jade');
//app.use(favicon(_dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(_dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use("/",userMgmt);

// app.get("/", function(req,res) {
// 	res.send("hi this is good");

// });
// app.get("/:name", function(req,res) {
// 	res.send("hi this is good,i am sending parameters"+req.params.name");
	
// });
// app.get("/:name/:name1", function(req,res) {
// 	console.log(req.params);
// 	object.keys(req.params).forEach(function(key){
// 		console.log("key ="+key);
// 	});
// 	res.send("hi this is good, i am sending parameters"+req.params.name 
// 		+" "+req.params.key);
// });
app.post("/postExample", function(req,res){
	res.send("hi how ae you post request")
	//console.log(req);
	// console.log("==="+ JSON.stringify(req.body));
	console.log("==="+(req.body)+ req.query.empid);
	// var name = req.body.name
	// var age = req.body.age
	//res.send("hi how ae you post request")
	res.json({"status":"s","msg":"hi how r u?",
                 "empid":"req.params.empid",
                 "name":req.params.name
                 //"name":req.body.name
})
//catch 404 and forward to error handler

app.use(function(req, res, next){
	var err = new Error('Not Found');
     err.status = 404;
     next(err);
});
// error handlers
//developement error handler
// will print stacktrace
if(app.get('env')==='development'){
	app.use(function(err,req,res,next){
	   res.status(err.status||500);
	   res.render('error',{
	      message:err.message,
	      error:err
	   })
	})
}
var server = http.createServer(app);
app.listen(2000,'localhost');