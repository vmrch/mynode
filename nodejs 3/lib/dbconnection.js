var mysql = require ('mysql');
module.exports = function (serverStartup){


	var pool = mysql.createPool({
		host:"localhost",
		user:"root",
		password:"",
		database :"na_clouddb"
		});
	pool.getConnection(function(err,connection)
	{
		if (err){
			console.log('Couldn\'t connect to retailer DB.'+err +'Stopping Server ...');
			process.exit(1);
		}
		console.log('Connected to retailer DB.');
		global.DB = function(cb) {
			cb(connection);
		}
		serverStartup.emit('dbConnected');
	});
}