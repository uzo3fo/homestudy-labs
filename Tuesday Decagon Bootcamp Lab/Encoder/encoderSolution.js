//The Encoder function takes two arrays as its parameters, raw and code_words.
//This function replaces the words in `raw` with the words in `code_words` such that the first occurrence of
//each word in `raw` is assigned the first unassigned word in `code_words`

function encoderSolution(raw, code_words) {
    let obj = {};

for(let i = 0; i < raw.length; i++){
    let char = raw[i]
    if(char === 'a'){obj[i] = code_words[0]}
    if(char === 'b'){obj[i] = code_words[1]}
    if(char === 'c'){obj[i] = code_words[2]}
    if(char === 'd'){obj[i] = code_words[3]}
}
return Object.values(obj);
}

module.exports = encoderSolution;