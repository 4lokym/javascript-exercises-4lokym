const findTheOldest = function(obj) {

    obj.sort((item1, item2) =>{
        death1 = item1.yearOfDeath;
        death2 = item2.yearOfDeath;
        
        
        if(item2.yearOfDeath === undefined){
            death1 = (new Date().getFullYear());
            console.log(death1);
        }
        if(item2.yearOfDeath === undefined){
            death2 = (new Date().getFullYear());
        }

        return (death2 - item2.yearOfBirth) - (death1 - item1.yearOfBirth);
    });
    return obj[0];
};


// Do not edit below this line
module.exports = findTheOldest;
