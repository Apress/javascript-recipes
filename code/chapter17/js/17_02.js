//ES5 Class Creation

function Show(name, network){
	this.name = name;
	this.network = network;
};

Show.prototype.getShowName = function getShowName(){
	return this.name;  //added to the Show prototype it now has access to it's properties.
};

Show.prototype.getShowNetwork = function getShowNetwork(){
	return this.network;
};

var gravityFalls = new Show('Gravity Falls', 'Disney XD');

console.log(gravityFalls.getShowName());  //returns Gravity Falls
console.log(gravityFalls.getShowNetwork()); //returns Disney XD

Show.prototype.getShowNetwork = function getShowNetwork(){
	return 'On My TV!';
};

console.log(gravityFalls.getShowNetwork()); //returns On My TV!

console.log(Show.prototype); //shows getShowName and getShowNetwork functions are now part of the Show prototype


//ES6 Class Creation

class MyTVShow{
	constructor(name, network){
		this.name = name;
		this.network = network;
	}
	
	getShowName(){
		return this.show;
	}
	
	getShowNetwork(){
		return this.network;
	}
}

console.log(MyTVShow.prototype) //shows getShowName and getShowNetwork functions are now part of the MyTVShow prototype