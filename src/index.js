import "./styles/styles.scss";
import "./index.html";

console.log('This isn rainbows.js');

let signsArray = [];
let numbersArray = [];
let result = 0;

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

document.getElementById('table').onclick = function(event) {
    let target = event.target;

    if (target.classList[0] === 'number' && document.getElementById('output-screen').textContent.length < 12) {
        pressNumberAction(target);
    }
    if (target.classList[0] === 'plus') {
        pressPlusAction();
    }
    if (target.classList[0] === 'equal-sign') {
        pressEqualSignAction();
    }
    if (target.classList[0] === 'multiply') {
        pressMultiplyAction();
    }
};

function pressNumberAction(targetButton) {



    document.getElementById('output-screen').textContent += targetButton.textContent;
    signsArray.splice((numbersArray.length - 2 < 0) ? 0 : numbersArray.length - 2, signsArray.length - 1);
    console.log(numbersArray.length - 2);
    console.log(signsArray.length - 1);
    console.log(numbersArray);
    console.log(signsArray);
}

function pressPlusAction() {
    signsArray.push('+');
    if (document.getElementById('output-screen').textContent !== "") {
        numbersArray.push(Number(document.getElementById('output-screen').textContent));
    }

    document.getElementById('output-screen').textContent = '';

    console.log(numbersArray);
    console.log(signsArray);
}

function pressMultiplyAction() {
    signsArray.push('*');
    if (document.getElementById('output-screen').textContent !== "") {
        numbersArray.push(Number(document.getElementById('output-screen').textContent));
    }

    document.getElementById('output-screen').textContent = '';

    console.log(numbersArray);
    console.log(signsArray);
}

function pressEqualSignAction() {

    if (document.getElementById('output-screen').textContent !== "") {
        numbersArray.push(Number(document.getElementById('output-screen').textContent));
    }
    signsArray.splice((numbersArray.length - 2 < 0) ? 0 : numbersArray.length - 2, signsArray.length - 1);
    console.log(numbersArray);
    console.log(signsArray);
    for (let i = 0; i < signsArray.length; i++ ) {
        if (signsArray[i] === '+') {
            result = sum(numbersArray.shift(), numbersArray.shift());
            numbersArray.unshift(result);
        }
        if (signsArray[i] === '*') {
            result = multiply(numbersArray.shift(), numbersArray.shift());
            numbersArray.unshift(result);
        }
    }
    document.getElementById('output-screen').textContent = result;
    numbersArray = [];
    signsArray = [];
}
