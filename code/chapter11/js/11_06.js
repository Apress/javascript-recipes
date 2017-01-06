var mapObj = new Map();
	
	mapObj.set('1st value', '1st key');
	mapObj.set('2nd value', '2nd key');
	mapObj.set('3rd value', '3rd key');
	console.log(mapObj.values()); //returns MapIterator object
	
	var mapIterator = mapObj.values();
	console.log(mapIterator.next().value); //1st value
	console.log(mapIterator.next().value); //2nd value