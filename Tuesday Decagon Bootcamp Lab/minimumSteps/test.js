function readSyntax(syntax) {
    // code goes here
    let arr = syntax.split('').join()
    let arr1 = [];
    let arr2 = [];
    let result;
    
    if(arr[0]==='>'|| arr[0]===']'||arr[0]==='}'||arr[0]===')'){result = 0};
    
    if(arr === ""){result = 'ok'};
    
    if(arr.length === 1){result = 0}
    
    

   for(var i = 0; i <arr.length; i++){
    if(arr.slice(-1) === '<'|| arr.slice(-1)==='['||arr.slice(-1)==='{'||arr.slice(-1)==='('){result = i};
        let char = arr[i];
        
        if(char == '[' || char == '{' || char == '<' || char == '('){
            arr1.push(char)
        }else{
        arr2.push(char);
    }
    if(arr1.length === 0 || arr2.length === 0){result = 0}  
    if(arr1.length === arr2.length){result = 'ok'}
        
       
    }
    return result
    
    
   }
  console.log(readSyntax('[[[[[[[[[[[[[[]]]]]]]]<<<<<<<<<<<>>>>>>>>>>>]]]]]]'+'[[[[[[[[[[[[[[]]]]]]]]<<<<<<<<<<<>>>>>>>>>>>]]]]]]' + '<'))
  console.log(readSyntax('<'))
  console.log(readSyntax('<>{}[]'))
  console.log(readSyntax('><<>>'))
  console.log(readSyntax(''))
  console.log(readSyntax('<><>{}()){}<>[]'))
 




















/*function binarySearch(array, number) {
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

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],8 ))
*/








/*function highestSum(Y, N) {
  if (Y.length < N) {
      return 0;
  }

  let arr = Y.split('');
  let result = -Infinity;
  let sum = 0;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'A' || arr[i] === 'B' || arr[i] === 'C' || arr[i] === 'D' || arr[i] === 'E' || arr[i] === 'F') {
          switch(arr[i]) {
              case 'A':
                  arr[i] = 10;
                  break;
              case 'B':
                  arr[i] = 11;
                  break;
              case 'C':
                  arr[i] = 12;
                  break;
              case 'D':
                  arr[i] = 13;
                  break;
              case 'E':
                  arr[i] = 14;
                  break;
              case 'F':
                  arr[i] = 15;
              
          }
      }

      arr[i] = Number(arr[i]);
  }

  while (arr.length >= N) {
      newArr.push(arr.slice(0, N));
      arr = arr.splice(N);
  }

  for (let i = 0; i < newArr.length; i++) {
      for(let j = 0; j < newArr[i].length; j++) {    
          sum += newArr[i][j];
      }
      if( sum > result) {
          result = sum;
      }
      sum = 0;
  }
  return result;
}
console.log(highestSum('DD3DAF12F', 2))*/




/*
function minimumsteps (arr, num){
  newArr= [];
 var result;
  if(arr.length === 0){result = 'Finished with 0 step'}
  if(arr[0]===0){result = 'Stopped at position 0 with 0 step'}
  else if(arr.length < num && arr.pop() === 0){result = `Stopped at position ${arr.length-1} with 1 step`}
  else{
  while (arr.length > 1) {
    let index = num;
    
    if(arr[num] === 0){index = num -1}
    
    newArr.push(arr.slice(1, index));
    arr = arr.splice(index);
    if(newArr.length === 1){
      result = `Finished with ${newArr.length} step`
    }else{
   result = `Finished with ${newArr.length} steps`
   }
  }
  }
 return result
} 
console.log(minimumsteps([1,1,1,1,1,0,1,0,1,0,1,1,0,1], 20))*/