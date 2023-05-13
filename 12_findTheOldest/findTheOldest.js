const findTheOldest = function(group) {
    let temp = group[0];
    let currentAge = getAge(group[0]);
    for (let i = 1; i < group.length; i++){
        if (getAge(group[i]) > currentAge){
            temp = group[i];
            currentAge = getAge(group[i]);
        }
    }
    return temp;
};

const getAge = function(person){
    if (person.hasOwnProperty('yearOfDeath')){
        return person.yearOfDeath - person.yearOfBirth;
    }
    else{
        let temp = new Date();
        let currentYear = temp.getFullYear();
        return currentYear - person.yearOfBirth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
