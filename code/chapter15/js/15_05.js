let helloSymbol = Symbol('Hello World Function');
	
let myObj = {
	[helloSymbol] () {
		return 'Hello World';
	}
}


console.log(myObj[helloSymbol]())

let iterableObj = {
	[Symbol.iterator]() {
		let dataArray = ['this', 'that', 'other'];
		let currentIndex = 0;
		return {
			next(){
				if(currentIndex < dataArray.length){
					return {value: dataArray[currentIndex++]};
				}else{
					return {done: true};
				}
			}
		}
	}
}

for(let x of iterableObj){
	console.log(x); //returns this, that, other
}

