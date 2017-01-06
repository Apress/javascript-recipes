var bandSet = new Set();
	bandSet.add('Dave');
	bandSet.add('Martin');
	bandSet.add('Fletch');
	bandSet.add('Jim');
	bandSet.add('Paul');
	bandSet.add('Kurt');
	bandSet.add('Andy');	
	bandSet.add('Vince');

var entry = bandSet.entries();
console.log(entry.next().value); //returns ["Dave", "Dave"]

console.log(entry.next()); //returns Object {value: Array[2], done: false}	

while(entry.next().done == false){  //as long as the current item item returns false then keep going
	console.log(entry.next().value)
}



	
	