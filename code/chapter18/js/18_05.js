//NODEJS CODE

const EventEmitter = require('event');

class EmitterClass extends EventEmitter{}

const emitterInstance = new EmitterClass();

emitterInstance.on('firstEvent', function(){
	console.log('firstEvent fired')
});


function secondEventHandler(data){
	console.log('secondEvent fired with data = ' + data)
}

emitterInstance.addEventListener('secondEvent', seconEventHandler);


emitterInstance.emit('firstEvent');
emitterInstance.emit('secondEvent', 'This is the data from the secondEvent');

emitterInstance.removeEventListener('secondEvent', secondEventHandler);