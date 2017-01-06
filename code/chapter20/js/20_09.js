 


var textWithNumbers = '1701-D, 1701';
var noLetterLookaHead = /1701(?!-D)/; //returns the second set ignoring  other characters
var withLetterLookaHead = /1701(?=-D)/;  //only returns the version with -D at the end

console.log(noLetterLookaHead.exec(textWithNumbers)); 
console.log(withLetterLookaHead.exec(textWithNumbers));