function *numCount(){
	var count = 0;
	while(count < 5)
	yield count++;
}

var irt = numCount();

console.log(irt.next()); //Object {value: 0, done: false}
console.log(irt.next()); //Object {value: 1, done: false}
console.log(irt.next()); //Object {value: 2, done: false}
console.log(irt.next()); //Object {value: 3, done: false}
console.log(irt.next()); //Object {value: 4, done: false}
console.log(irt.next()); //Object {value: undefined, done: true}