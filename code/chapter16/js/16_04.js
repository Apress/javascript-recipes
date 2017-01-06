var handler ={
	set (target, key, value){
		console.log('PROPERTY SET')
	}
}


var target = {};


var revocable = Proxy.revocable(target, handler);

var proxy = revocable.proxy;

proxy.prop1 = 'Prop1'; //returns PROPERTY SET	

revocable.revoke();

proxy.prop2 = 'Prop 2'; //returns TypeError