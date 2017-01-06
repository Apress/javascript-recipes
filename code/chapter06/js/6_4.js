// JavaScript Document
var submitBtn = document.getElementById('subtmitBtn');
	submitBtn.addEventListener('click', function(e){
		e.preventDefault();
		
		var dateSelected = document.getElementById('dateComponent');
		var dateArray = [];
			if(dateSelected.value != ''){
				console.log(typeof dateSelected.value); //result is a string
				dateArray = dateSelected.value.split('');			
				for(var i = 0; i < dateArray.length; i++){					 
					if(dateArray[i] === '-'){
						dateArray[i] = '/'; 
					}
				}
			var formatedDate = new Date(dateArray.join(''));
				document.getElementById('dateResult').value = (formatedDate.getMonth() + 1) + '-' + formatedDate.getDate() + '-' + formatedDate.getFullYear();				
			}
			
	});