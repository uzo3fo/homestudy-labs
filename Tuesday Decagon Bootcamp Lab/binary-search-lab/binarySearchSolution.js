//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array
// it returns true if the number is in the array and false if otherwise

function binarySearch(array, number) {
  //Type your solutions here
  var obj = {},
  index, count = 0;
var start = 0;
var end = array.length - 1;
var middle = Math.floor((start + end) / 2);

while (array[middle] !== number && start <= end) {
  if (number < array[middle]) end = middle - 1;
  else start = middle + 1;
  middle = Math.floor((start + end) / 2);
  count++;
}

obj.index = array[middle] === number ? middle : -1;
obj.count = count;
return obj;
}

module.exports = binarySearch;