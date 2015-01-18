var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
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

//catch 404 and forward to error handler

app.get("/",function(req,res){
    res.send("hello! wahts up")
});

app.use(function(req, res, next){
	var err = new Error('Not Found');
     err.status = 404;
     next(err);
});
// error handlers
//developement error handler
// will print stacktrace
if(app.get('env')==='development'){
	app.use(function(err, req, res, next){
	   res.status(err.status||500);
	   res.render('error',{
	      message:err.message,
	      watsup:"watsup",
	      error:err
	   });
	});
}
app.use(funcion(err, req, res,next) {
	res.status(err.status||500);
	   res.render('error',{
	      message:err.message,
	      watsup:"watsup",
	      error:{}
	   });
	});
module.exports = app;