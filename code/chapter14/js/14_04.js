function rawWithVars(stringArray, ...values){
	console.log(stringArray.raw)
	console.log(stringArray.raw[2])  //returns Jones\n
	console.log(stringArray[2]) //returns Jones
}

let name1 = 'Luke';
let name2 = 'Jessica';
let name3 = 'Danny';
let name4 = 'Matt';


rawWithVars `${name1} Cage\n ${name2} Jones\n ${name3} Rand\n ${name4} Murdock`;