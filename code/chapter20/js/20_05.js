 


var textWithNumbers = 'USS Enterprise 1701-D';
var serachNumbers  = /[0-9]/;
var serachNumbersGreedy  = /[0-9]+/;

console.log(serachNumbers.exec(textWithNumbers)); //returns ["1", index: 15, input: "USS Enterprise 1701-D"]
console.log(serachNumbersGreedy.exec(textWithNumbers)); //returns ["1701", index: 15, input: "USS Enterprise 1701-D"]