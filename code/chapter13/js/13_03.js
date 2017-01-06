function *myGen(){
	yield 'generator function'
}

var iterator = myGen();
console.log(iterator.next()); //Object {value: "generator function", done: false}
console.log(iterator.next()); //Object {value: undefined, done: true}

var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var myGenFunction = new GeneratorFunction('value',  'yield value');
var myGenIterator = myGenFunction();

console.log(myGenIterator.next()); //Object {value: undefined, done: false}
console.log(myGenIterator.next()); //Object {value: undefined, done: true}