const fibonacci = function(input) {
    if (input < 0){
        return "OOPS";
    }
    else{
        let temp = parseInt(input);
        if (temp == 1 || temp == 2){
            return 1;
        }
        else{
            return fibonacci(temp - 1) + fibonacci(temp - 2);
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
