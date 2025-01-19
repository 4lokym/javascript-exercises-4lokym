const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    let temp = 0;
    
    num = Number.parseInt(num);

    if(num<0){
        return "OOPS";
    }else if(num === 0){
        return 0;
    }else{
        for(let i = 0; i< num-2; i++){
            temp = a+b;
            b = a;
            a = temp;
        }
    }  
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
