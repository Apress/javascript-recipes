var handler = {
	set (target, key, value){
		console.info(`property "${key} set on object "${target}" with a value of "${value}"`);		
    }
}


var target = {};
var proxy = new Proxy(target, handler);

proxy.a = 'a' //outputs  property "a set on object "[object Object]" with a value of "a"
proxy.b = 'b' //outputs property "b set on object "[object Object]" with a value of "b"
proxy.c = 'c' //outputs  property "c set on object "[object Object]" with a value of "c"


