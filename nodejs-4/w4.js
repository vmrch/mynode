for (var i=0; i<15;i++){
	console.log(i);// to display 0-5 numbers
	setTimeout(function(){
	//console.log(i);
	console.log(i-2);// to display last -2 and repeat
	},100);// to repeat the same number

	
}// output is 5 of 5 times
//delayed function, 
// var data = [];
// for (var i=0; i<5;i++){
// 	data[i]=function foo(){
// 	console.log(i);
// 	};//not printing any thing
// }
// for (var i=0; i<5;i++){
//    (function(){
//     var j =i;
//     setTimeout(function(){
// 	console.log(i);},500*i);
// 	})();
// }