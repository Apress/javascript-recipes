function assignListeners(){
	var divs = document.getElementsByTagName('div');
	
	for(var i = 0; i < divs.length; i++){
		divs[i].addEventListener('click', showID, true);
		divs[i].addEventListener('click', showID, false);
	}
}	


function showID(evt){
	alert(evt.currentTarget.id)  //returns when clicking on div 3 it will return 
								///3,2,1 for the ccapture phase, then 1,2,3 for the bubbling phase
}

document.addEventListener('DOMContentLoaded', assignListeners, false);


