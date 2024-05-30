// The four numeric operations functions

// Addition
function add(val1, val2) {
  return val1 + val2;
}

// Subtraction
function subtract(val1, val2) {
  return val1 - val2;
}

// Multiplication
function multiply(val1, val2) {
  return val1 * val2;
}

// Division
function divide(val1, val2) {
  return val1 / val2;
}

// The three elements of a numeric operation
let first_value;
let second_value;
let operator;

// The operation function 
function operate() {
  let result;
  switch(operator) {
    case "+":
      result = add(first_value, second_value);
      break;
    case "-":
      result = subtract(first_value, second_value);
      break;
    case "*":
      result = multiply(first_value, second_value);
      break;
    case "/":
      result = divide(first_value, second_value);
      break;
  }
  return result;
}