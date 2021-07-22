//Define elements

const numberBtns = document.querySelectorAll(".num");
const delBtn = document.querySelector(".del-btn");
const numDisplay = document.querySelector(".num-display");
const storedNumber = document.querySelector(".stored-number");

const equals = document.querySelector(".equals");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const add = document.querySelector(".add");
let calcArray = [];
let numOne = [];
let numTwo = [];
let numFinal = [];
let firstNumber = 0;
let secondNumber = 0;

// Loop for numberBtns selector all
for (let i = 0; i < numberBtns.length; i++) {
  numberBtns[i].addEventListener("click", () => {
    if (!numDisplay.classList.contains("number-one-stored")) {
      numOne.push(parseInt(numberBtns[i].textContent));
      numOne.slice(" ");
      firstNumber = numOne.join("");
      numDisplay.textContent = firstNumber;
    } else if (numDisplay.classList.contains("num-final")) {
      numFinal.push(parseInt(numberBtns[i].textContent));
      numFinal.slice(" ");
      firstNumber = numFinal.join("");
      numDisplay.textContent = firstNumber;
    } else {
      numTwo.push(parseInt(numberBtns[i].textContent));
      numTwo.slice(" ");
      secondNumber = numTwo.join("");
      numDisplay.textContent = secondNumber;
    }
  });
}

//Event listeners
delBtn.addEventListener("click", deleteFunction);
divide.addEventListener("click", divideFunction);
multiply.addEventListener("click", multiplyFunction);
add.addEventListener("click", addFunction);
subtract.addEventListener("click", subtractFunction);
equals.addEventListener("click", equalsFunction);

//Functions
function deleteFunction() {
  numOne = [];
  numTwo = [];
  numFinal = [];
  calcArray = [];
  numDisplay.textContent = "";
  firstNumber = numOne;
  secondNumber = numTwo;
  storedNumber.textContent = firstNumber;
  numDisplay.classList.remove("add");
  numDisplay.classList.remove("subtract");
  numDisplay.classList.remove("multiply");
  numDisplay.classList.remove("divide");
  numDisplay.classList.remove("number-one-stored");
  numDisplay.classList.remove("num-final");
}

function divideFunction() {
  numDisplay.classList.add("number-one-stored");
  numDisplay.classList.add("divide");
  calcArray.push(firstNumber);
  numDisplay.textContent = "";
  numTwo = [];
  secondNumber.textContent = "";
  storedNumber.textContent = `${firstNumber} ÷`;

  numDisplay.classList.remove("num-final");
  numFinal = [];
  firstNumber.textContent = "";

  numDisplay.classList.remove("add");
  numDisplay.classList.remove("subtract");
  numDisplay.classList.remove("multiply");
}

function multiplyFunction() {
  numDisplay.classList.add("number-one-stored");
  numDisplay.classList.add("multiply");
  calcArray.push(firstNumber);
  numDisplay.textContent = "";
  numTwo = [];
  secondNumber.textContent = "";
  storedNumber.textContent = `${firstNumber} x`;

  numDisplay.classList.remove("num-final");
  numFinal = [];
  firstNumber.textContent = "";

  numDisplay.classList.remove("add");
  numDisplay.classList.remove("subtract");
  numDisplay.classList.remove("divide");
}

function addFunction() {
  numDisplay.classList.add("number-one-stored");
  numDisplay.classList.add("add");
  calcArray.push(firstNumber);
  numDisplay.textContent = "";
  numTwo = [];
  secondNumber.textContent = "";
  storedNumber.textContent = `${firstNumber} +`;

  numDisplay.classList.remove("num-final");
  numFinal = [];
  firstNumber.textContent = "";

  numDisplay.classList.remove("subtract");
  numDisplay.classList.remove("multiply");
  numDisplay.classList.remove("divide");
}

function subtractFunction() {
  numDisplay.classList.add("number-one-stored");
  numDisplay.classList.add("subtract");
  calcArray.push(firstNumber);
  numTwo = [];
  secondNumber.textContent = "";
  numDisplay.textContent = "";
  storedNumber.textContent = `${firstNumber} -`;

  numDisplay.classList.remove("num-final");
  numFinal = [];
  firstNumber.textContent = "";

  numDisplay.classList.remove("add");
  numDisplay.classList.remove("multiply");
  numDisplay.classList.remove("divide");
}

function equalsFunction() {
  // DIVDED NUMBER
  if (numDisplay.classList.contains("divide")) {
    let dividedNumber = parseInt(firstNumber) / parseInt(secondNumber);
    numFinal = [];
    numberToString(dividedNumber);
    firstNumber = numFinal.join("");
    numDisplay.classList.add("num-final");
    if (dividedNumber % 1 === 0) {
      numDisplay.textContent = numFinal.join("");
    } else {
      numDisplay.textContent = numFinal.join("").toFixed(3);
    }
    firstNumber = dividedNumber;

    // MULTIPLIED NUMBER
  } else if (numDisplay.classList.contains("multiply")) {
    let multipliedNumber = parseInt(firstNumber) * parseInt(secondNumber);
    numFinal = [];
    numberToString(multipliedNumber);
    numDisplay.textContent = numFinal.join("");
    firstNumber = numFinal.join("");
    numDisplay.classList.add("num-final");

    // ADDED NUMBER
  } else if (numDisplay.classList.contains("add")) {
    let addedNumber = parseInt(firstNumber) + parseInt(secondNumber);
    // numFinal = [];
    numberToString(addedNumber);
    firstNumber = numFinal.join("");
    numDisplay.textContent = firstNumber;
    numDisplay.classList.add("num-final");
    secondNumber.textContent = "";

    // SUBTRACTED NUMBER
  } else if (numDisplay.classList.contains("subtract")) {
    let subtractedNumber = parseInt(firstNumber) - parseInt(secondNumber);
    numFinal = [];
    numberToString(subtractedNumber);
    numDisplay.textContent = numFinal.join("");
    firstNumber = numFinal.join("");
    numDisplay.classList.add("num-final");
  }

  storedNumber.textContent = "";
  firstNumber.textContent = "";
  numDisplay.classList.remove("add");
  numDisplay.classList.remove("subtract");
  numDisplay.classList.remove("multiply");
  numDisplay.classList.remove("divide");
}

function backspaceFunction() {
  if (!numDisplay.classList.contains("number-one-stored")) {
    numOne.pop();
    numOne.slice(" ");
    firstNumber = numOne.join("");
    numDisplay.textContent = firstNumber;
  } else if (numDisplay.classList.contains("num-final")) {
    numFinal.pop();
    numFinal.slice(" ");
    firstNumber = numFinal.join("");
    numDisplay.textContent = firstNumber;
  } else {
    numTwo.pop();
    numTwo.slice(" ");
    secondNumber = numTwo.join("");
    numDisplay.textContent = secondNumber;
  }
}

function numberToString(numberToConvert) {
  let strNumber = numberToConvert.toString();
  for (let i = 0; i < strNumber.length; i++) {
    numFinal.push(strNumber.charAt(i));
  }

  return numFinal;
}

function keyFunction(input) {
  if (!numDisplay.classList.contains("number-one-stored")) {
    numOne.push(input);
    numOne.slice(" ");
    firstNumber = numOne.join("");
    numDisplay.textContent = firstNumber;
  } else if (numDisplay.classList.contains("num-final")) {
    numFinal.push(input);
    numFinal.slice(" ");
    firstNumber = numFinal.join("");
    numDisplay.textContent = firstNumber;
    secondNumber.textContent = "";
  } else {
    numTwo.push(input);
    numTwo.slice(" ");
    secondNumber = numTwo.join("");
    numDisplay.textContent = secondNumber;
  }
}

// Key inputs
document.onkeypress = function (e) {
  // console.log(e.which);
  if (e.which === 48) {
    keyFunction(0);
  } else if (e.which === 49) {
    keyFunction(1);
  } else if (e.which === 50) {
    keyFunction(2);
  } else if (e.which === 51) {
    keyFunction(3);
  } else if (e.which === 52) {
    keyFunction(4);
  } else if (e.which === 53) {
    keyFunction(5);
  } else if (e.which === 54) {
    keyFunction(6);
  } else if (e.which === 55) {
    keyFunction(7);
  } else if (e.which === 56) {
    keyFunction(8);
  } else if (e.which === 57) {
    keyFunction(9);
  } else if (e.which === 13) {
    equalsFunction();
  } else if (e.which === 99) {
    deleteFunction();
  } else if (e.which === 47) {
    divideFunction();
  } else if (e.which === 42) {
    multiplyFunction();
  } else if (e.which === 43) {
    addFunction();
  } else if (e.which === 45) {
    subtractFunction();
  }
};

window.addEventListener("keydown", (e) => {
  if (e.which === 8 || e.which === 46) {
    backspaceFunction();
  }
});
