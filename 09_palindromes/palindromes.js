// First lowercases string,  remove non alpha numeric characters, 
// converts to array, tests for palindrome-ness

const palindromes = function (input) {
    let temp = input.replace(/\W/g, '').toLowerCase();
    let test = temp.split("");
    for (let i = 0; i < temp.length / 2; i++){
        if (test[i] != test[test.length - i - 1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
