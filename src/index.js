import "./styles/styles.scss";
import "./index.html";
import createHtmlForCalculator from "./markupCalculator";
import randomId from "./randomId"

console.log(createHtmlForCalculator());

let signsArray = [];
let numbersArray = [];
let result = 0;

class Calculator {
    constructor(elem) {
        /*this.signsArray = [];
        this.numbersArray = [];
        this.result = 0;*/
        this.elem = elem;
        this.calculatorId = randomId();
        this.htmlForCalculator = createHtmlForCalculator(this.calculatorId);

        document.querySelector(this.elem).innerHTML = this.htmlForCalculator;
        document.querySelector(`#table_${this.calculatorId}`).addEventListener('click', this.createEventListener)

    }

    createEventListener() {
        console.log(this.id);
        // return document.getElementById(`table_${this.id}`).onclick = function() {
        //
        //     let target = event.target;
        //
        //     if (target.classList[0] === 'number' && document.getElementById(`output-screen_${id}`).textContent.length < 12) {
        //         pressNumberAction(target, this.id);
        //     }
        //
        //     if (target.classList[0] === 'plus') {
        //         pressPlusAction(this.id);
        //     }
        //
        //     if (target.classList[0] === 'equal-sign') {
        //         pressEqualSignAction(this.id);
        //     }
        // };
    }
}

function pressNumberAction(targetButton, id) {
  document.getElementById(`output-screen_${id}`).textContent += targetButton.textContent;
}

function sum(a, b) {
  return a + b;
}

function pressPlusAction(id) {
  signsArray.push('+');
  if (document.getElementById(`output-screen_${id}`).textContent !== "") {
    numbersArray.push(Number(document.getElementById(`output-screen_${id}`).textContent));
  }

  document.getElementById(`output-screen_${id}`).textContent = '';
}

function pressEqualSignAction(id) {
  if (document.getElementById(`output-screen_${id}`).textContent !== "") {
    numbersArray.push(Number(document.getElementById(`output-screen_${id}`).textContent));
  }

  for (let i = 0; i < signsArray.length; i++ ) {
    if (signsArray[i] === '+') {
      result = sum(numbersArray.shift(), numbersArray.shift());
      numbersArray.unshift(result);
    }
  }
  document.getElementById(`output-screen_${id}`).textContent = result;
  numbersArray = [];
  signsArray = [];
}

new Calculator('.calculator-1');
new Calculator('.calculator-2');

/*function sum(a, b) {
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
    console.log('lizaaaaa');
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
}*/
