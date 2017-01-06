var phrase = 'It\'s the information age brother!';
var phraseArray = phrase.split(' ');

var reverseArray =  phraseArray.map(function(element){
	return element.split('').reverse().join('');;
})

console.log(reverseArray); //returns ["s'tI", "eht", "noitamrofni", "ega", "!rehtorb"]
