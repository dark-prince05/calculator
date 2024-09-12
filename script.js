let addition = (a, b) => a + b;

let subtraction = (a, b) => a - b;

let multiplication = (a, b) => a * b;

let division = (a, b) => a / b;

let modulus = (a, b) => a % b;

let operate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return addition(num1, num2).toFixed(2);
    case "-":
      return subtraction(num1, num2);
    case "*":
      return multiplication(num1, num2);
    case "/":
      if (num2 === 0) {
        return "hmm..trying to divide by 0";
      } else {
        return division(num1, num2).toFixed(5);
      }
    case "%":
      return modulus(num1, num2);
  }
};

let firstNum = 0;
let operator = "";
let secondNum = 0;
let content = false;

const display = document.querySelector("#result-display");
const numBtns = document.querySelectorAll(".num-btn");
const opBtns = document.querySelectorAll(".op-btn");
const equals = document.querySelector("#equals");
const dot = document.querySelector(".dot");

numBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (content) {
      display.textContent = "";
      content = false;
    }
    if (e.target.id === ".") {
      dot.disabled = true;
    } else if (!display.textContent.includes(".")) {
      dot.disabled = false;
    }
    display.textContent += e.target.id;
  });
});

opBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      display.textContent = "";
      firstNum = 0;
      secondNum = 0;
      operator = "";
      content = false;
    } else if (e.target.id === "erase") {
      display.textContent = display.textContent.slice(0, -1);
    } else if (operator !== "") {
      secondNum = +display.textContent;
      display.textContent = operate(firstNum, operator, secondNum);
      firstNum = +display.textContent;
      operator = e.target.id;
      content = true;
    } else {
      firstNum = +display.textContent;
      operator = e.target.id;
      content = true;
    }
  });
});

equals.addEventListener("click", () => {
  secondNum = +display.textContent;
  if (operator !== "") {
    display.textContent = operate(firstNum, operator, secondNum);
  }
  operator = "";
});
