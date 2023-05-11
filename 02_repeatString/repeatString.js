const repeatString = function(input, count) {
    let output = "";
    if (count < 0){
        return "ERROR";
    }
    else{
        for (let i = 0; i < count; i++){
            output = output.concat(input);
        }
        return output;
    }    
};

// Do not edit below this line
module.exports = repeatString;
