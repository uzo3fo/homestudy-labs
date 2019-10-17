
function evenlySpaced(first, second, last) {
    //Provide your solution here
    var largeNumber;
    var mediumNumber;
    var smallNumber;
    //for largeNumber
    if(first > second && first > last){largeNumber = first};
    if(second > first && second > last){largeNumber = second};
    if(last > first && last > second){largeNumber = last}
    //for mediumNumber
    if((first > second && first < last) || (first > last && first < second)){mediumNumber = first};
    if((second > first && second < last) || (second > last && second < first)){mediumNumber = second}
    if((last > first && last < second) || (last > second && last < first)){mediumNumber = last}
    //for smallNumber
    if(first < second && first < last){smallNumber = first}
    if(second < first && second < last){smallNumber = second}
    if(last < second && last < first){smallNumber = last}
    //comparison
    if(largeNumber - mediumNumber == mediumNumber - smallNumber){
        return true;
    }
    return false;
}
console.log(evenlySpaced(2,5,8))
module.exports = evenlySpaced;