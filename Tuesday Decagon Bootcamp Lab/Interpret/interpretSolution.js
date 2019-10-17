//This function takes three parameters, the first is a number and the second and third are arrays.
//The second parameter is an array of operations which cold contain one or more of "+", "-", and "*"
//The third array is an arry of numbers which are the second participants in the operations
//If you encounter an unknown command in the second array, return -1.

function interpret(num, arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){if(arr1.includes('$')){return -1}}

    let result1, result2, result3,answer;
            result1 = eval(num + arr1[0] + arr2[0]);
            result2 = eval(result1 + arr1[1] + arr2[1]);
            result3 = eval(result2 + arr1[2] + arr2[2]);
            
    if(arr1.length == 3){answer = result3}
    if(arr1.length == 2){answer = result2}
    if(arr1.length == 1){answer = result1}
    
    return answer;
}

module.exports = interpret;