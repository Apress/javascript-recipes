var Person = function(){
	this.firstName =  'Peter',
	this.lastName = 'Parker';
	this.location = 'Queens/New York';
}


var Hero = function(){
	Person.call(this);
	this.heroName = 'Spider-Man';
	this.powers = 'Climb Walls/Shoots Webs';		
}


Hero.prototype = Object.create(Person.prototype);
Hero.prototype.constructor = Hero;

var superHero = new Hero();
console.log(superHero.hasOwnProperty('firstName')); //returns true
console.log(superHero.hasOwnProperty('toString')); //returns false

