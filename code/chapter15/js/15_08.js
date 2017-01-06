var  PrimitiveObj = {
	 [Symbol.toPrimitive](hint){
		if(hint == 'number'){
			return 100 ; 
		}else if (hint == 'string'){
			return 'this is a string';
		}else{
			return 'this is the defult';
		}
	}
}



	console.log(+PrimitiveObj) //returns 100
	console.log(`${PrimitiveObj}`) //returns this is a string
	console.log(PrimitiveObj + ' ')  //returns this is the default
	
	console.log({} + ' ')