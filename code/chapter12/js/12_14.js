function multiParams(one, two, three, four){
	if(typeof three == 'undefined'){
		console.log('three is undefined') //returns three is undefined
	}
	console.log(one); //returns 1
	console.log(two); //returns 2
	console.log(three);  //returns undefined
	console.log(four); // returns undefined
	
}

multiParams(1,2);

function playList(song = 'Seek 200'){
	console.log('Playing ' + song);
}

playList('Think'); //returns Playing Think
playList('Hack 1'); //returns Playing Hack 1
playList() //returns Playing Seek 200