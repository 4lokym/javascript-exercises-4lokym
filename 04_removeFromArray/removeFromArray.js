const removeFromArray = function(array) {

    for(let i = 1; i<arguments.length; i++){
        array = rmElements(array, arguments[i]);
    }

    return array;
};

function rmElements(array, element){
    let newArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i] === element){
            continue;
        }

        newArray.push(array[i]);
    }

    return newArray;
}

console.log(removeFromArray([1,2,3,4], 3));


// Do not edit below this line
module.exports = removeFromArray;
