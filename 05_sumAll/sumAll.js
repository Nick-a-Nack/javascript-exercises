const sumAll = function(a,b) {

    if (typeof(a) != "number" || typeof(b) != "number"){
        return "ERROR";
    }
    if (a < 0 || b < 0){
        return "ERROR";
    }
    if (a == b){
        return a;
    }
    else if (a < b){
        return 1 + ((b * (b + 1)) - (a * (a + 1))) / 2;
    }
    else{
        return 1 + ((a * (a + 1)) - (b * (b + 1))) / 2; 
    }
};

// Do not edit below this line
module.exports = sumAll;
