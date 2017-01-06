export var myVar = 1;
export let myLet = 2;
export const myConst = 3;

export function myFun(){};

export class myClass();

//export list
export {myVar, myLet, myClass};

//exporting an anonymous function as the default
export default function(){};

//using a named function as the default
export {myFun as default};