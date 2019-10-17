function highestNumPosition(array) {
  // write you code here...

var results = [];
var index1 = 0;
var index2 = 0;
let largestNumber = -Infinity;


//loop outside array
  for (var i = 0; i < array.length; i++) {
    //loop through the inner arrays 
    for (var j = 0; j < array[i].length; j++) {
      //locate the highest number
      if (array[i][j] > largestNumber) {
        largestNumber = array[i][j];
        index1 = i;
        index2 = j;
      } 
    } 
  }  

  results.push(index1);
  results.push(index2);
    return results;
}


module.exports = highestNumPosition;