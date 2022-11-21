const add = function(x, y) {
  return (x + y);
};

const subtract = function(x, y) {
	return (x - y);
};

const sum = function(num, ...nums) {
  let result = 0;
  // this if block is an (admittedly) silly attempt to catch two types of input: a single array of several numbers, or several separate numbers
  if (typeof num === "object") {
    nums = num;
  } else {
    result = num;
  }
  for (let x of nums) {
    result += x;
  }
  return result;
};

const multiply = function(num, ...nums) {
  let result = 1;
  // this if block is an (admittedly) silly attempt to catch two types of input: a single array of several numbers, or several separate numbers
  if (typeof num === "object") {
    nums = num;
  } else {
    result = num;
  }
  for (let x of nums) {
    result *= x;
  }
  return result;
};

const power = function(x, y) {
	return (x ** y);
};

const factorial = function(x) {
	if (x < 0) {
    return undefined;
  } else if (x < 2) {
    return 1;
  }
  return x * factorial(x - 1);
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
