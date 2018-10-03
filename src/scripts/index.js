import "../styles/styles.scss";
import "../index.html";
import createHtmlForCalculator from "./markupCalculator";
import randomId from "./randomId"

/*let signsArray = [];
let numbersArray = [];
let result = 0;*/

class Calculator {
  constructor(elem) {
    this.signsArray = [];
    this.numbersArray = [];
    this.oneNumber = "";
    this.result = 0;
    this.elem = elem;
    this.calculatorId = randomId();
    this.htmlForCalculator = createHtmlForCalculator(this.calculatorId);

    this.init();
  }

  init() {
    document.querySelector(this.elem).innerHTML = this.htmlForCalculator;
    document.querySelector(`#table_${this.calculatorId}`).addEventListener('click', this.createEventListener.bind(this));
  }

  createEventListener() {
    let target = event.target;

    if (target.classList[0] === 'number' && this.oneNumber.length < 12) {
        this.pressNumberAction(target, this.calculatorId);
    }

    if (target.classList[0] === 'plus') {
        this.pressPlusAction(this.calculatorId);
    }

    if (target.classList[0] === 'equal-sign') {
        this.pressEqualSignAction(this.calculatorId);
    }

    if (target.classList[0] === 'clear') {
        this.pressClearAction(this.calculatorId);
    }
  }

  pressNumberAction(targetButton, id) {
      console.log(this.numbersArray.length);
      console.log(this.signsArray.length);
    if(this.result !== 0 && this.result === this.oneNumber) {
        this.oneNumber = "";
    }
    this.oneNumber += targetButton.textContent;

    console.log(this.oneNumber);
    document.querySelector(`#output-screen_${id}`).textContent = this.oneNumber;
  }

  pressPlusAction(id) {
    if(this.oneNumber) {
      this.signsArray.push('+');
      this.numbersArray.push(Number(this.oneNumber));

      this.oneNumber = "";
      console.log(this.signsArray);
      console.log(this.numbersArray);
    }
  }

  pressClearAction(id) {
      document.getElementById(`output-screen_${id}`).textContent = '';
      this.signsArray = [];
      this.numbersArray = [];
      this.oneNumber = "";
      this.result = 0;
  }

  pressEqualSignAction(id) {
      if(this.oneNumber) {
          this.numbersArray.push(Number(this.oneNumber));

          this.oneNumber = "";
          console.log(this.signsArray);
          console.log(this.numbersArray);
      }
    for (let i = 0; i < this.signsArray.length; i++ ) {
      if (this.signsArray[i] === '+') {
        this.result = this.sum(this.numbersArray.shift(), this.numbersArray.shift());
        this.numbersArray.unshift(this.result);
      }
    }

    if (this.result > 12) {
      console.log(this.result.toString().length);
      this.result = this.result.toString().slice(0,10) + "e" + (this.result.toString().length-10);
    }

    document.getElementById(`output-screen_${id}`).textContent = "9999999999e9";//this.result;
      this.signsArray = [];
      this.numbersArray = [];
      this.oneNumber = this.result;
  }

  sum(a, b) {
    return a + b;
  }
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
