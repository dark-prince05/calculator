let addition = (a, b) => {
  return a + b;
};

let subtraction = (a, b) => {
  return a - b;
};

let multiplication = (a, b) => {
  return a * b;
};

let division = (a, b) => {
  return a / b;
};

let modulus = (a, b) => {
  return a % b;
};

let firstNum = 50;
let operator = "/";
let secondNum = 34;

let operate = (num1, operator, num2) => {
  let res;
  switch (operator) {
    case "+":
      res = addition(num1, num2);
      break;
    case "-":
      res = subtraction(num1, num2);
      break;
    case "*":
      res = multiplication(num1, num2);
      break;
    case "/":
      res = division(num1, num2);
      break;
    case "%":
      res = modulus(num1, num2);
      break;
  }
  return res;
};
