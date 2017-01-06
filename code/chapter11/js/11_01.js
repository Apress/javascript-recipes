var mapObj = new Map();
	mapObj.set('myString', 'myString is a string key');
	console.log(mapObj.get('myString')); //myString is a string key
	
var myObj = {};
	
	mapObj.set(myObj, 'Object is a used as a key');
	console.log(mapObj.get(myObj)); //Object is a used as a key
	