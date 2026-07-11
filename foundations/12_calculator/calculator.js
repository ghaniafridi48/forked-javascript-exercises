const add = function(firstNumber,secondNumber) {
	return firstNumber + secondNumber ;
};

const subtract = function(firstNumber,secondNumber) {
	return firstNumber - secondNumber ;
};

const sum = function(array) {
	return array.reduce((result , num) => result + num,0)
};

const multiply = function(arr) {
  return arr.reduce((result,num) => result * num ,1)
};

const power = function(base,exponent) {
	return base ** exponent;
};

const factorial = function(n) {
	 let factorial = 1;
  for(let i=1 ; i <= n ; i++){
  factorial *= i ;
  }
  return factorial;
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
