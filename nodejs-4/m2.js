function hello(){
	//console.log("world")
	return ("world");

}
function hello1(){
	//console.log("world")
	return ("hello2");

}
module.exports.helloworld = function(){
	console.log("watsup,r u there");
	console.log(hello1());
	//return ("world");

}
module.exports.hello = hello;
//module.exports.helloworld = hello;