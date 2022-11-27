/*
3. (E3 from Lesson 5)
Start with 2 hardcoded arrays, e.g. prices1 & prices2. 
Build a third array that contains the picesSum of the elements in the first two arrays.
*/

prices1 = [12, 16, 24, 28] 
prices2 = [1, 1, 1, 1]
pricesSum = [];


for (i=0; i < prices1.length; i++){
  pricesSum.push(prices1[i] + prices2[i]);
}
console.log("Result: " + pricesSum);
// expected result: [13, 17, 25, 29] 