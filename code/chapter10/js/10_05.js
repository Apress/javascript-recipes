var numberSet = new Set();
	numberSet.add(1);
	numberSet.add(2);
	numberSet.add(3);
	numberSet.add('things');  
	console.log(numberSet.keys());  //returns SetIterator {1, 2, 3, "things"}
	console.log(numberSet.values());  //returns SetIterator {1, 2, 3, "things"}
	
	var elements = numberSet.values();
	console.log(elements.next().value);  //returns 1
	console.log(elements.next().value);  //returns 2
	
	