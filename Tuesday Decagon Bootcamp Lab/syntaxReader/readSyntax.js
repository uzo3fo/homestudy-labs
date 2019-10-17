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


module.exports = readSyntax;
