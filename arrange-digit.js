function digitApart(){
  let digit = [1,2,3,4];
  let apart = new Map();
  let arrangedDigit = [];
  apart.set(1,4);
  apart.set(2,3);
  apart.set(3,2);
  apart.set(4,1);
  
  function arrange(item){
    let index = 0;
    while(arrangedDigit[index]) index++;
    
    arrangedDigit[index] = item;
    arrangedDigit[arrangedDigit.indexOf(item) + apart.get(item) + 1] = item;
  }
  
  while(digit.length){
    arrange(digit.shift()); //farther apart
    arrange(digit.pop()); //closest apart
  }
  
  return arrangedDigit.join("");
}


console.log(digitApart());
//output:
//14243123
