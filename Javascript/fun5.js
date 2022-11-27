/*
5.  Start with a hardcoded array of numbers. 
For each number in the array, print the following:
    * "Negative", if the number is negative;
    * "Positive", if the number is positive;
    * "Zero", if the number is 0;
    * */

numbers = [-2, 0, 2, -3, 0, 5, 0, -11];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0)
    console.log(`${numbers[i]} is Negative`);
  else if (numbers[i] > 0)
    console.log(`${numbers[i]} is Positive`);
  else
    console.log(`${numbers[i]} is Zero`);
    
}