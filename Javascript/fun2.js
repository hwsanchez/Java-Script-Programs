/*2. Start with a hardcoded array. 
2.1 Count the even numbers in the array;
2.2 Count the odd numbers in an array; */

var randomNumbers = [2, 7, 11, 54, 23, 87, 88, 90, 67, 62, 71];
var evenNumbers = 0;
var oddNumbers = 0;

for (i = 0; i < randomNumbers.length; i++) {
  if (randomNumbers[i] % 2 === 0)
    evenNumbers++;
  else
    oddNumbers++;
  
}
console.log(randomNumbers);
console.log(`There are ${evenNumbers} even numbers
and ${oddNumbers} odd numbers in the Array.`);