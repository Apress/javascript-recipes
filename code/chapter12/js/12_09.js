class Ship{
	
	constructor(name, type, color){
		this.name = name;
		this.type = type;	
		this.color = color;
	}
	
	shipName(){
		return 'I am ' + this.name;
	}
	
	shipType(){
		return  'I am type: ' + this.type;
	}
	
	shipColor(){
		return  'My color is ' + this.color;
	}	
}



class SpaceShip extends Ship{
	constructor(type, name, color){
		super(type, name, color)	

	}

	spaceShipName(){
		return super.shipName();
	}
	
	spaceShipType(){
		return super.shipType();
	}
	
	spaceShipColor(){
		return super.shipColor();
	}	
}



var planetExpress = new SpaceShip('Planet Express Ship', 'Delivery  Ship' ,'Green');

console.log(planetExpress.spaceShipName()); //returns I am Planet Express Ship
console.log(planetExpress.shipType());  //return I am type: Delivery  Ship
console.log(planetExpress.spaceShipColor()); // returns My color is Green

