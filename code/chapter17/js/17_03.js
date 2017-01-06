class Cookies{
	constructor(){
		this._typeOfCookie;
	}
	
	set cookieType(typeOfCookie){
		this._typeOfCookie = typeOfCookie;
	}
	
	get cookieType(){
		return this._typeOfCookie;
	}
	
}

var myCookie = new Cookies();
	myCookie.cookieType = "Chocolate Chip";

	console.log(myCookie.cookieType); //returns Chocolae Chip;

	console.log(myCookie._typeOfCookie);

