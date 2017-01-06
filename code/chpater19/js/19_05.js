
function onSuccess(){
	console.log('You are Correct');
}

function onError(e){
	console.log(e.message);
}


function isFirstOfficer(name, onError, onSuccess){
	if(name === 'Spock'){
		onSuccess();
	}else{
		onError(new Error('Sorry, Wrong Officer'));
	}
}


isFirstOfficer('Scotty', onError, onSuccess);
isFirstOfficer('Spock', onError, onSuccess);