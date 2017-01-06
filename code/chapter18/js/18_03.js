
var myEvent = new Event('finished');
var myOtherEvent = new CustomEvent('done', {'detail': 'done looping!'});

document.addEventListener('finished', function(e){
	console.log('finished event called');
});

document.addEventListener('done', function(e){
	console.log(e.detail);
})

for(var j = 0; j < 100; j++){	
	if( j == 99){
		document.dispatchEvent(myEvent);
		document.dispatchEvent(myOtherEvent);
	}
}







