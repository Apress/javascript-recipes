function *insideThrow(){
	while(true){
		try{
			yield;
		}catch(e){
			if (e != 'a') {
                throw e;
            }
		   console.log('inside catch', e)
		}
	}
}

var it = insideThrow();
console.log(it.next());
console.log(it.throw('a'));  //Object {value: "inside try block", done: false}
console.log(it.throw('buss')) //catch runs and returns last yield value Object {value: "inside try block", done: false}

function *outsideThrow(){
	var value =  yield value;
	return value;
}

var it2 = outsideThrow();

console.log(it2.next());  //Object {value: undefined, done: false}
try{
	console.log(it2.next('outside try block'));  //Object {value: "outside try block", done: true}
	console.log(it2.throw(new Error('this is an error')));  //catch runs
}catch(e){
	console.log('outside catch')
}

