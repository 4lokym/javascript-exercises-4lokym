const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce(function(sum, item){
    return sum += item;
  }, 0);
};

const multiply = function(array) {
  return array.reduce(function(mult, item){
    return mult *= item;
  }, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	let result = 1;

  for(let i=1; i<=num; i++){
    result *= i
  }
  return result;
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
