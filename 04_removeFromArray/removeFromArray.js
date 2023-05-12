const removeFromArray = function(array, ...args) {
    let output = [];
    for (let i = 0; i < array.length; i++){
        let found = false;
        for (let j = 0; j < args.length; j++){
            if (array[i] === args[j]){
                found = true;
                break;
            }
        }
        if (!found){
            output.push(array[i]);
        }
        else{
            found = false;
        }
    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
