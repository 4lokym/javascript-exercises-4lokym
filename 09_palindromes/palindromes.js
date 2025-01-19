function simplePalindrome(str){
    if(str.length == 0){
        return true;
    }else if(str.length == 1){
        return true;
    }else{
        return (str[0] === str[str.length-1]) && simplePalindrome(str.slice(1, str.length-1));
    }
}

function palindromes(str) {
    const punctuation = "!\"\\£$%&/()=?'^|;,:.-_#@[]{}*<> ";
    
    let newString = "";

    for(let i = 0; i < str.length; i++){
        let chara = str.charAt(i);
        if(!(punctuation.includes(chara))){
            newString += chara;
        }
    }
    return simplePalindrome(newString.toLowerCase());
};

console.log(palindromes("ZZZZ car, a man, a maracaz."));


 //Do not edit below this line
module.exports = palindromes;
