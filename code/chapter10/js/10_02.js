var numberSet = new Set();
	numberSet.add(1);
	numberSet.add(2);
	numberSet.add(3);
	numberSet.add('things');  
	console.log(numberSet.size);  //returns 4 
	numberSet.delete('things');
	
	console.log(numberSet.size); //returns 3
	