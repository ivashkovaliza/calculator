import "./styles/styles.scss";
import "./index.html";
import createHtmlForCalculator from "./markupCalculator";

let signsArray = [];
let numbersArray = [];
let result = 0;

function randomId(min = 1, max = 100000000) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

class Calculator {
  constructor(elem, where) {
    this.elem = elem;
    this.where = where;
    this.calculatorId = randomId();
    this.htmlForCalculator = createHtmlForCalculator(this.calculatorId);

    console.log(this.calculatorId);

    console.log(this.htmlForCalculator);

    this.elem.insertAdjacentHTML(this.where, this.htmlForCalculator);

   createEventListener(this.calculatorId);

  }

}


function createEventListener(id) {
  return document.getElementById(`table_${id}`).onclick = function() {
    console.log(id);
    let target = event.target;

    if (target.classList[0] === 'number' && document.getElementById(`output-screen_${id}`).textContent.length < 12) {
      pressNumberAction(target, id);
    }

    if (target.classList[0] === 'plus') {
      pressPlusAction(id);
    }

    if (target.classList[0] === 'equal-sign') {
      pressEqualSignAction(id);
    }
  };
}

function pressNumberAction(targetButton, id) {
  document.getElementById(`output-screen_${id}`).textContent += targetButton.textContent;
  signsArray.splice((numbersArray.length - 2 < 0) ? 0 : numbersArray.length - 2, signsArray.length - 1);
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

new Calculator(document.body.getElementsByClassName('wrapper')[0], 'afterBegin');
new Calculator(document.body.getElementsByClassName('wrapper')[0], 'afterBegin');

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
