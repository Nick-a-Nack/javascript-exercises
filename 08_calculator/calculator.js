const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(input) {
	let count = 0;
  let total = input.reduce((iterator, temp) => iterator + temp, count);
  return total;
  
};

const multiply = function(input) {
  let count = input[0];
  for (let i = 1; i < input.length; i++){
    count = count * input[i];
  }
  return count;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if ((a == 1) || (a == 0)){
    return 1;
  }
  else{
    return a * factorial(a - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
