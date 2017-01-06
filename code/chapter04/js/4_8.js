// JavaScript Document

function simpleRandomGenerator(){
  return Math.random();
}

function simpleRandomFloor(){
  return Math.floor(Math.random());
}

function simpleRandomRound(){
  return Math.round(Math.random());
}


function getRandomBetweenMinAndMax(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log('simpleRandomGenerator = ' + simpleRandomGenerator());
console.log('simpleRandomFloor = ' + simpleRandomFloor());
console.log('simpleRandomRound = ' + simpleRandomRound());
console.log('getRandomBetweenMinAndMax = ' + getRandomBetweenMinAndMax(0,5));
console.log('getRandomArbitrary = ' + getRandomArbitrary(0,5));
