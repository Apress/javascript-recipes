var originalString = 'All of this has happened before';
var stringArray = originalString.split(' ');
var reversedArray = stringArray.map(function(e){
		return e.split('').reverse().join('');
		
	});
console.log(reversedArray);