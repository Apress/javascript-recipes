var numberSet = new Set();
	numberSet.add(1);
	numberSet.add(2);
	numberSet.add(3);
	numberSet.add('things');  
	console.log(numberSet.has('things'));  //returns true
	console.log(numberSet.has('stuff'));  //returns false
	
	