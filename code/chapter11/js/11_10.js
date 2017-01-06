var mapObj = new Map();
	mapObj.set('1st value', '1st key');
	mapObj.set('2nd value', '2nd key');
	mapObj.set('3rd value', '3rd key');
	
	mapObj.forEach(function(value, key){
		console.log('mapObj['+key+'] = ' + value); //returns mapObj[N value] = N key
	});
		
	

	
