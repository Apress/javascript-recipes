var mapObj = new Map();
	mapObj.set('myString', 'myString is a string key');
	
	
	mapObj.delete('myString');
	console.log(mapObj.get('myString')); //undefined
	