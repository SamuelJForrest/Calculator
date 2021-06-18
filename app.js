//Define elements

const numberBtns = document.querySelectorAll('.num');
const delBtn = document.querySelector('.del-btn');
const numDisplay = document.querySelector('.num-display');
const storedNumber = document.querySelector('.stored-number');

const equals = document.querySelector('.equals');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
let calcArray = [];
let numOne = [];
let numTwo = [];
let firstNumber = 0;
let secondNumber = 0;

// Loop for numberBtns selector all
for (let i = 0; i < numberBtns.length; i++){
    numberBtns[i].addEventListener('click', () => {
        if (!numDisplay.classList.contains('number-one-stored')) {
            numOne.push(parseInt(numberBtns[i].textContent));
            numOne.slice(' ');
            firstNumber = numOne.join('');
            numDisplay.textContent = firstNumber;
        } else {
            numTwo.push(parseInt(numberBtns[i].textContent));
            numTwo.slice(' ');
            secondNumber = numTwo.join('');
            numDisplay.textContent = secondNumber;
        }
    });
}

//Event listeners
delBtn.addEventListener('click', deleteFunction);
divide.addEventListener('click', divideFunction);
multiply.addEventListener('click', multiplyFunction);
add.addEventListener('click', addFunction);
subtract.addEventListener('click', subtractFunction);
equals.addEventListener('click', equalsFunction);

//Functions
function deleteFunction(){
    numOne = [];
    numTwo = [];
    calcArray = [];
    numDisplay.textContent = '';
    firstNumber = numOne;
    secondNumber = numTwo;
    storedNumber.textContent = firstNumber;
    numDisplay.classList.remove('add');
    numDisplay.classList.remove('subtract');
    numDisplay.classList.remove('multiply');
    numDisplay.classList.remove('divide');
    numDisplay.classList.remove('number-one-stored');
}

function divideFunction(){
    numDisplay.classList.add('number-one-stored');
    numDisplay.classList.add('divide');
    calcArray.push(firstNumber);
    numDisplay.textContent = '';
    numTwo = [];
    secondNumber.textContent = '';
    storedNumber.textContent = `${firstNumber} ÷`;

    numDisplay.classList.remove('add');
    numDisplay.classList.remove('subtract');
    numDisplay.classList.remove('multiply');
};

function multiplyFunction(){
    numDisplay.classList.add('number-one-stored');
    numDisplay.classList.add('multiply');
    calcArray.push(firstNumber);
    numDisplay.textContent = '';
    numTwo = [];
    secondNumber.textContent = '';
    storedNumber.textContent = `${firstNumber} x`;

    numDisplay.classList.remove('add');
    numDisplay.classList.remove('subtract');
    numDisplay.classList.remove('divide');
};

function addFunction(){
    numDisplay.classList.add('number-one-stored');
    numDisplay.classList.add('add');
    calcArray.push(firstNumber);
    numDisplay.textContent = '';
    numTwo = [];
    secondNumber.textContent = '';
    storedNumber.textContent = `${firstNumber} +`;

    numDisplay.classList.remove('subtract');
    numDisplay.classList.remove('multiply');
    numDisplay.classList.remove('divide');
};

function subtractFunction(){
    numDisplay.classList.add('number-one-stored');
    numDisplay.classList.add('subtract');
    calcArray.push(firstNumber);
    numTwo = [];
    secondNumber.textContent = '';
    numDisplay.textContent = '';
    storedNumber.textContent = `${firstNumber} -`;

    numDisplay.classList.remove('add');
    numDisplay.classList.remove('multiply');
    numDisplay.classList.remove('divide');
}

function equalsFunction(){
    if (numDisplay.classList.contains('divide')){
        let dividedNumber = parseInt(firstNumber) / parseInt(secondNumber);
        if (dividedNumber % 1 === 0){
            numDisplay.textContent = dividedNumber;
        } else {
            numDisplay.textContent = dividedNumber.toFixed(2);
        }
        firstNumber = dividedNumber;
    } else if (numDisplay.classList.contains('multiply')){
        let multipliedNumber = parseInt(firstNumber) * parseInt(secondNumber);
        numDisplay.textContent = multipliedNumber;
        firstNumber = multipliedNumber;
    } else if (numDisplay.classList.contains('add')){
        let addedNumber = parseInt(firstNumber) + parseInt(secondNumber);
        numDisplay.textContent = addedNumber;
        firstNumber = addedNumber;
    } else if (numDisplay.classList.contains('subtract')){
        let subtractedNumber = parseInt(firstNumber) - parseInt(secondNumber);
        numDisplay.textContent = subtractedNumber;
        firstNumber = subtractedNumber;
    }

    numDisplay.classList.remove('number-one-stored');
    numTwo = [];
    storedNumber.textContent = '';
};

function backspaceFunction(){
    if (!numDisplay.classList.contains('number-one-stored')){
        numOne.pop();
        numOne.slice(' ');
        firstNumber = numOne.join('');
        numDisplay.textContent = firstNumber; 
    } else {
        numTwo.pop();
        numTwo.slice(' ');
        secondNumber = numTwo.join('');
        numDisplay.textContent = secondNumber; 
    }
}

// Key inputs
document.onkeypress = function(e){
    console.log(e.which);
    if (e.which === 48){
        if (!numDisplay.classList.contains('number-one-stored')){
            numOne.push(0);
            numOne.slice(' ');
            firstNumber = numOne.join('');
            numDisplay.textContent = firstNumber; 
        } else {
            numTwo.push(0);
            numTwo.slice(' ');
            secondNumber = numTwo.join('');
            numDisplay.textContent = secondNumber; 
        }  
    } else if (e.which === 49){
        if (!numDisplay.classList.contains('number-one-stored')){
            numOne.push(1);
            numOne.slice(' ');
            firstNumber = numOne.join('');
            numDisplay.textContent = firstNumber; 
        } else {
            numTwo.push(1);
            numTwo.slice(' ');
            secondNumber = numTwo.join('');
            numDisplay.textContent = secondNumber; 
        }  
    } else if (e.which === 50){
        if (!numDisplay.classList.contains('number-one-stored')){
            numOne.push(2);
            numOne.slice(' ');
            firstNumber = numOne.join('');
            numDisplay.textContent = firstNumber; 
        } else {
            numTwo.push(2);
            numTwo.slice(' ');
            secondNumber = numTwo.join('');
            numDisplay.textContent = secondNumber; 
        }  
    } else if (e.which === 51){
        if (!numDisplay.classList.contains('number-one-stored')){
            numOne.push(3);
            numOne.slice(' ');
            firstNumber = numOne.join('');
            numDisplay.textContent = firstNumber; 
        } else {
            numTwo.push(3);
            numTwo.slice(' ');
            secondNumber = numTwo.join('');
            numDisplay.textContent = secondNumber; 
        }  
    } else if (e.which === 52){
        if (!numDisplay.classList.contains('number-one-stored')){
            numOne.push(4);
            numOne.slice(' ');
            firstNumber = numOne.join('');
            numDisplay.textContent = firstNumber; 
        } else {
            numTwo.push(4);
            numTwo.slice(' ');
            secondNumber = numTwo.join('');
            numDisplay.textContent = secondNumber; 
        }  
    } else if (e.which === 53){
        if (!numDisplay.classList.contains('number-one-stored')){
            numOne.push(5);
            numOne.slice(' ');
            firstNumber = numOne.join('');
            numDisplay.textContent = firstNumber; 
        } else {
            numTwo.push(5);
            numTwo.slice(' ');
            secondNumber = numTwo.join('');
            numDisplay.textContent = secondNumber; 
        }  
    } else if (e.which === 54){
        if (!numDisplay.classList.contains('number-one-stored')){
            numOne.push(6);
            numOne.slice(' ');
            firstNumber = numOne.join('');
            numDisplay.textContent = firstNumber; 
        } else {
            numTwo.push(6);
            numTwo.slice(' ');
            secondNumber = numTwo.join('');
            numDisplay.textContent = secondNumber; 
        }  
    } else if (e.which === 55){
        if (!numDisplay.classList.contains('number-one-stored')){
            numOne.push(7);
            numOne.slice(' ');
            firstNumber = numOne.join('');
            numDisplay.textContent = firstNumber; 
        } else {
            numTwo.push(7);
            numTwo.slice(' ');
            secondNumber = numTwo.join('');
            numDisplay.textContent = secondNumber; 
        }  
    } else if (e.which === 56){
        if (!numDisplay.classList.contains('number-one-stored')){
            numOne.push(8);
            numOne.slice(' ');
            firstNumber = numOne.join('');
            numDisplay.textContent = firstNumber; 
        } else {
            numTwo.push(8);
            numTwo.slice(' ');
            secondNumber = numTwo.join('');
            numDisplay.textContent = secondNumber; 
        }  
    } else if (e.which === 57){
        if (!numDisplay.classList.contains('number-one-stored')){
            numOne.push(9);
            numOne.slice(' ');
            firstNumber = numOne.join('');
            numDisplay.textContent = firstNumber; 
        } else {
            numTwo.push(9);
            numTwo.slice(' ');
            secondNumber = numTwo.join('');
            numDisplay.textContent = secondNumber; 
        }  
    } else if (e.which === 13){
        equalsFunction();
    } else if (e.which === 99){
        deleteFunction();
    } else if (e.which === 47){
        divideFunction();
    } else if (e.which === 42){
        multiplyFunction();
    } else if (e.which === 43){
        addFunction();
    } else if (e.which === 45){
        subtractFunction();
    }
}

window.addEventListener('keydown', (e) => {
    if (e.which === 8 || e.which === 46){
        backspaceFunction();
    }
});