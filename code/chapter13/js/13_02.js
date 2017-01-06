function fun1(){
	console.log('function 1');
}

function fun2(){
	console.log('function 2');
}




function *runFun(){
	yield;
	yield fun1();
	yield fun2();
}

var iterator = runFun();
console.log(iterator.next()); //pauses function  Object {value: undefined, done: false}
console.log(iterator.next()); //returns 'function1' Object {value: undefined, done: false}
console.log(iterator.next()); //returns 'function 2' Object {value: undefined, done: false}
console.log(iterator.next()); //done = true Object {value: undefined, done: true}
