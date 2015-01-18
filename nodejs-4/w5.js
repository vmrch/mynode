//delayed function,
var data = [];
var j=i;
for (var i=0; i<5;i++){
	(function(){
		setTimeout(function(){
			console.log(j);

		},500*i);
	});
// 	data[i]=function foo(){
// 	console.log(i);
// 	};//not printing any thing
}
console.log(" ----") ;