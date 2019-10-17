function switchChar (inputChar, actualChar, changeChar){
    // Code goes here
    
    var result = '';
    var indexAtActualChar = [];

   if(actualChar.length !== changeChar.length){return 'Length mismatch'};

   if(inputChar.length > actualChar.length){return -1}
   
   for(var i = 0; i <= actualChar.length;i++){
    for(var j = i + 1; j <= actualChar.length; j++){
        if(actualChar[i] == actualChar[j]){ return 'Repeated value'}
    }
}

for(var i = 0; i < inputChar.length; i++){
    var number = inputChar[i];
    if(actualChar.indexOf(number) === -1){return -1}
    if(actualChar.indexOf(number) !== -1){
        indexAtActualChar.push(actualChar.indexOf(number));
    }
}


for(var i = 0; i < indexAtActualChar.length; i++){
    result += changeChar[indexAtActualChar[i]]
}
return result;
}




   
   
   
   module.exports = switchChar;
   