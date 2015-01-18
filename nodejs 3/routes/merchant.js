var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');


router.post('/insert', function(req,res){
	var params = {
	"id" : req.body.empid,
	"name" : rew.body.empname
};


	db.DB(function(mysqldb){
		mysqldb.query('Insert into test set?',params,function(err,result){
			 if(err){
				   res.json({
					   "status":"E",
					   "msg":err
				   });
			 }else{
				    res.json({
					   "status":"s",
					   "msg":"",
					   "data":result
				   });
			 }
		});
	});
});
router.put('/update/:id/:name', function(req,res){
	// var params = {
	// "id" : req.body.empid,
	// "name" : rew.body.empname
	// "id" : req.body.empid,
	// "name" : rew.body.empname
// };
     var id = req.params.id;
	 var name = rew.params.name;


	db.DB(function(mysqldb){

		var sql = "'Update into test set name = '"+name+"' where id = "+id;
			mysqldb.query(sql,{}, function(err,result) {
			 
			 if(err){
				   res.json({
					   "status":"E",
					   "msg":err
				   });
			 }else{
				    res.json({
					   "status":"s",
					   "msg":"",
					   "data":result
				   });
			 }
		});
	});
});
router.delete('/delete/:id/:name', function(req,res){

     var id = req.params.id;
	 //var name = rew.params.name;


	db.DB(function(mysqldb){

		var sql = "delete from test 1 where id = "+id;
			mysqldb.query(sql,{}, function(err,result) {
			 
			 if(err){
				   res.json({
					   "status":"E",
					   "msg":err
				   });
			 }else{
				    res.json({
					   "status":"s",
					   "msg":"",
					   "data":result
				   });
			 }
		});
	});
});
 module.exports = router;