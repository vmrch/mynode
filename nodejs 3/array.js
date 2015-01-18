var array ={3,4,5,6};

console.log{"before processing array"};

array.forEach(function(elem,i) {
	
	console.log{"elem== "+ elem +" " +i};
});

console.log("index element = "+ array.indexOf(7));
console.log("after processing array");

var employee =[{"id":2345, "name": ven, "company":"hp"},{"id":4567, "company":"xyz"}];

employee.forEach(function(key,val){
	if(key.name !=undefined){
	console.log (key.name.split(/\s+/));
	}
	else{
	console.log
	(" there is no name property exists")
	}
});
var employee ={"id":345,"name":"sravan"};
console.log(employee.id)