const reverseString = function(word) {
    let reversedWord = "";

    for(let wordLenght = word.length - 1; wordLenght >= 0; wordLenght--){
        reversedWord += word.at(wordLenght);
    }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
