const proto = {
	hasRadio(){
		console.log('This is a radio');
	},
	
	hasAndroidAuto(){
		console.log('This has Android Auto');
	},

	hasCarPlay(){
		console.log('This has Car Play');
	}
}


function factoryFeatures(){
	return Object.create(proto);
}

const myCar = factoryFeatures();
myCar.hasAndroidAuto();
