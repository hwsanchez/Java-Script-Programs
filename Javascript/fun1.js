/*
1. Start with a hardcoded array and a hardcoded number. Count the occurences of the hardcoded number in the array;
*/

var myNumbers = [25, 40, 100, 25, 278, 88, 46, 52, 25, 2000, 25];
var ocurrences = 0;
const favNumber = 25;


for (i = 0; i < myNumbers.length; i++) {

  if (myNumbers[i] === favNumber)
    ocurrences++;
    
}
console.log(myNumbers);
console.log(`The number ${favNumber} appears ${ocurrences} times in the Array`);