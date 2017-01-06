class Robot{
	constructor(){
		this.type;	
	}
}

class BendingUnit extends Robot {
	constructor(){
		super();
		this.name;
		this.occupation = 'Industrial Robot';
		this.origin = 'Tijuana, Mexico';
		
	}
}


class AstromechDroid extends Robot{
	constructor(){
		super();
		this.name;
	}
}

var bender = new BendingUnit();
	bender.type = 'Bending Unit 22';
	bender.name = 'Bender Bending Rodriguez';

	console.log(bender.type);  //returns Bending Unit 22
	console.log(bender.name);  //returns Bender Bending Rodriguez

var r2d2 = new AstromechDroid();
	r2d2.type = 'Astromech Droid';
	r2d2.name = 'R2-D2';

	console.log(r2d2.type);  //returs Astromech Droid
	console.log(r2d2.name);  //returns R2-D2

 
