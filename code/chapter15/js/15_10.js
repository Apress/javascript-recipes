class MyClass{
	firstProp() {return 'First Prop';}
	 
}



with(MyClass.prototype){
	console.log(firstProp()) //returns First Prop
}

class MyClassWithUnscopables{
	firstProp(){return 'First Prop';}
	
	get[Symbol.unscopables](){
		return {firstProp : true}
	}
}

with(MyClassWithUnscopables.prototype){
	console.log(firstProp()); //ReferenceError: firstProp is not defined
}