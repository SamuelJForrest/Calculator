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
delBtn.addEventListener('click', () => {
    numOne = [];
    numTwo = [];
    calcArray = [];
    numDisplay.textContent = '';
    numDisplay.classList.remove('add');
    numDisplay.classList.remove('subtract');
    numDisplay.classList.remove('multiply');
    numDisplay.classList.remove('divide');
});

divide.addEventListener('click', () => {
    numDisplay.classList.add('number-one-stored');
    numDisplay.classList.add('divide');
    calcArray.push(firstNumber);
    numDisplay.textContent = '';
    storedNumber.textContent = firstNumber;

    numDisplay.classList.remove('add');
    numDisplay.classList.remove('subtract');
    numDisplay.classList.remove('multiply');
});

multiply.addEventListener('click', () => {
    numDisplay.classList.add('number-one-stored');
    numDisplay.classList.add('multiply');
    calcArray.push(firstNumber);
    numDisplay.textContent = '';
    storedNumber.textContent = firstNumber;

    numDisplay.classList.remove('add');
    numDisplay.classList.remove('subtract');
    numDisplay.classList.remove('divide');
});

add.addEventListener('click', () => {
    numDisplay.classList.add('number-one-stored');
    numDisplay.classList.add('add');
    calcArray.push(firstNumber);
    numDisplay.textContent = '';
    storedNumber.textContent = firstNumber;

    numDisplay.classList.remove('subtract');
    numDisplay.classList.remove('multiply');
    numDisplay.classList.remove('divide');
});

subtract.addEventListener('click', () => {
    numDisplay.classList.add('number-one-stored');
    numDisplay.classList.add('subtract');
    calcArray.push(firstNumber);
    numDisplay.textContent = '';
    storedNumber.textContent = firstNumber;

    numDisplay.classList.remove('add');
    numDisplay.classList.remove('multiply');
    numDisplay.classList.remove('divide');
})

equals.addEventListener('click', () => {
    if (numDisplay.classList.contains('divide')){
        let dividedNumber = parseInt(firstNumber) / parseInt(secondNumber);
        numDisplay.textContent = dividedNumber;
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
})