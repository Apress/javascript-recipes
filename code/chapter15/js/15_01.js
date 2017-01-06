let mySym1 = Symbol('This is my first Symbol');
let mySym2 = Symbol();

console.log(mySym1 == mySym2);
console.log(mySym1.toString()) //returns Symbol(This is my first Symbol)