var weakSet = new WeakSet();
var obj1 = {};

weakSet.add(obj1);
console.log(weakSet.has(obj1)); //returns true just like a Set
	
	
	