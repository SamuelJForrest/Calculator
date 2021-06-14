//Define elements

const numberBtns = document.querySelectorAll('.num');
const delBtn = document.querySelector('.del-btn');
const numDisplay = document.querySelector('.num-display');

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
delBtn.addEventListener('click', () => {
    numOne = [];
    numTwo = [];
    calcArray = [];
    numDisplay.textContent = '';
});

divide.addEventListener('click', () => {
    numDisplay.classList.add('number-one-stored');
    numDisplay.classList.add('divide');
    calcArray.push(firstNumber);
});

multiply.addEventListener('click', () => {
    numDisplay.classList.add('number-one-stored');
    numDisplay.classList.add('multiply');
    calcArray.push(firstNumber);
})

equals.addEventListener('click', () => {
    if (numDisplay.classList.contains('divide')){
        let dividedNumber = parseInt(firstNumber) / parseInt(secondNumber);
        numDisplay.textContent = dividedNumber;
    } else if (numDisplay.classList.contains('multiply')){
        let multipliedNumber = parseInt(firstNumber) * parseInt(secondNumber);
        numDisplay.textContent = multipliedNumber;
    }

    numDisplay.classList.remove('number-one-stored');
})