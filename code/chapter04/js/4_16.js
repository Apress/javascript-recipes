function swapNumbers(numb1, numb2){
   console.log('starting order = ' + numb1 + ' , ' + numb2); 
   numb2 = numb2 - numb1; //is now -150
   numb1 = numb1 + numb2; //is now 50
   numb2 = numb1 - numb2; //is now 200
  console.log('ending order = ' + numb1 + ' , ' + numb2);
}

swapNumbers(200, 50);


 