const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	for (num of arr)
    {
      sum += num;
    }
  return sum; 
};

const multiply = function(arr) {
  result = 1;
  for (num of arr)
    {
      result *= num;
    }
  return result;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  (num == 0) && (num = 1);
  for (let i = num-1; i > 1; i--)
    {
      num *= i;
    }
    return num;
};
console.log(factorial(0));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
