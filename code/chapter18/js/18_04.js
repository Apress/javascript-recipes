
var textField = document.getElementsByTagName('input');
var isListening = true;

function changeMessage(e){
	if(isListening){
		isListening = !isListening;
		document.removeEventListener('click', changeMessage);
		textField[0].value = 'eventListener = ' + isListening;		
	}

}

function setupDoc(e){
	textField[0].value = 'eventListener = true';
	document.addEventListener('click', changeMessage);
		
}

document.addEventListener('DOMContentLoaded', setupDoc);



