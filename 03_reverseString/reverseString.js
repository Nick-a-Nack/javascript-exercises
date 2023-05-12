const reverseString = function(input) {
    let temp = input.split("");
    let output = "";

    for (let i = 0; i < temp.length; i++){
        output = output.concat(temp[temp.length - i - 1]);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
