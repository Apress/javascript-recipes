var Hero = function(){
	this.heroName = 'Spider-Man';
	this.powers = 'Climb Walls/Shoots Webs';		
}

Hero.prototype.firstName = 'Peter';
Hero.prototype.lastName = 'Parker';
Hero.prototype.location = 'Queens/New York';

var superHero = new Hero();

for(var key in superHero){
		console.log(key + ' = ' + superHero[key]); //returns all properties including what is in the prototype
}

for(var key in superHero){
	if(superHero.hasOwnProperty(key)){
		console.log(key + ' = ' + superHero[key]); //only returns properties directly from the object
	}	
}


