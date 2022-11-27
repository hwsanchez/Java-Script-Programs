/*4. Start with a hardcoded array of prices. 
Increase all prices in this array 
which are larger than 2000 with 10%; 
(check the example in the file `02-array-modify.js`)

```
*/

prices = [120, 1600, 2400, 2800] 
for (i = 0; i < prices.length; i++){
  
  if (prices[i] > 2000)
    prices[i] = prices[i] + prices[i] * 0.1;
  

}
console.log("Result: " + prices);


