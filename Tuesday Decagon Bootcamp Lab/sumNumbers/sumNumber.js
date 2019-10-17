function sumNumbers (str) {
  // your code goes here...
let onlyNumbers = [];

for(let i = 0; i < str.length; i++){
  //check if the string is a number and push it into the empty array
onlyNumbers.push(parseInt(str[i]))
}
//join and remove NaN from the strings
let result = onlyNumbers.join('').split('NaN');
//filter the elements without the whitespaces
let result2 = result.filter(element => element != '');
//add the elements together
let result3 = result2.map(value => Number(value)).reduce((a,b) => a + b, 0);
//return the result
return result3;
  
}
console.log(sumNumbers('1weudh56jdnbfskjn788sdhkfbs90'))

module.exports = sumNumbers