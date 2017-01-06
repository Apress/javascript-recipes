Object.prototype.good  = "stuff";
var ship  = {
	type:40,
	name:'tardis',
	color:'blue'
};

for(var prop in ship){
	console.log(prop + ': ' + ship[prop]);	
}

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(var prop in numArray){
	console.log(prop + ': ' + numArray[prop]);	
}

for(var i = 0; i <numArray.length; i++){
	console.log(numArray[i]);	
}