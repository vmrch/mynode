var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');
router.get('/userManagement', function(req,res){
	db.DB(function(mysqldb){
		mysqldb.query("select *from na_ol_merchant_login_tab",function(err,result){
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