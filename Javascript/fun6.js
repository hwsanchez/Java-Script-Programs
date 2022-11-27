/*
## Part 2 - Bonus
6. Start with a hardcoded array. 
6.1 Check if there is a number that appears at least 2 times in the array; 
6.2 Check if there are more numbers that appear at least 2 times in the array;

**Hint** You can also use a for loop inside a for loop :) 
*/

numbers = [2, 5, 4, 2, 4, 6, 7, 5, 8, 6, 9, 10, 9, 9, 10, 12, 14, 14, 9, 9, 5];
repeatedNumbers = [];
//repetitions = []; This array will in the future count how many times each repeated number appears in the numbers array
counter = 0;

console.log(`The array contains the numbers:
${numbers}`);
for (i = 0; i < numbers.length; i++) {
  for (a = i + 1; a < numbers.length; a++) {
    if (numbers[i] === numbers[a]) {
      if (counter === 0 && !repeatedNumbers.includes(numbers[i])) {
        repeatedNumbers.push(numbers[i]);
      }

      counter++;
    }
  }
  counter = 0;
}
console.log(`the following numbers are repeated: ${repeatedNumbers}`);

for (i = 0; i < repeatedNumbers.length; i++) {
  for (a = 0; a < numbers.length; a++) {
    if (repeatedNumbers[i] === numbers[a]) {
      counter++;
    }
  }

  console.log(`${repeatedNumbers[i]} appers: ${counter} times`);
  counter = 0;
}
