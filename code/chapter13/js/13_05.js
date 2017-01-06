function *returnMSG(){
	var value = yield value
	return value;
	
}

var it = returnMSG();
console.log(it.next()); //Object {value: undefined, done: false}
console.log(it.next('things')); //Object {value: "things", done: true}

