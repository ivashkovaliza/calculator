import "../styles/styles.scss";
import "../index.html";
import createHtmlForCalculator from "./markupCalculator";
import randomId from "./randomId"

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
        this.pressPlusAction();
    }
    if (target.classList[0] === 'subtraction') {
      this.pressSubtractionAction();
    }

    if (target.classList[0] === 'multiply') {
        this.pressMultiplyAction();
    }
    if (target.classList[0] === 'divide') {
      this.pressDivideAction();
    }

    if (target.classList[0] === 'equal-sign') {
        this.pressEqualSignAction(this.calculatorId);
    }

    if (target.classList[0] === 'clear') {
        this.pressClearAction(this.calculatorId);
    }
  }

  pressNumberAction(targetButton, id) {
      if(this.signsArray.length !== this.numbersArray.length) { //debugger
          this.signsArray.splice(this.numbersArray.length - 1,this.signsArray.length - this.numbersArray.length);
      }
      console.log(this.numbersArray.length);
      console.log(this.signsArray.length);
    if(this.result !== 0 && this.result === this.oneNumber) {
        this.oneNumber = "";
    }
    this.oneNumber += targetButton.textContent;

    console.log(this.oneNumber);
    document.querySelector(`#output-screen_${id}`).textContent = this.oneNumber;
  }

  pressPlusAction() {
    if(this.oneNumber) {

      this.numbersArray.push(Number(this.oneNumber));

      this.oneNumber = "";

    }
    this.signsArray.push('+');
      console.log(this.signsArray);
      console.log(this.numbersArray);
  }

  pressSubtractionAction() {
    if(this.oneNumber) {

      this.numbersArray.push(Number(this.oneNumber));

      this.oneNumber = "";

    }
    this.signsArray.push('-');
      console.log(this.signsArray);
      console.log(this.numbersArray);
  }

  pressMultiplyAction() {
      if(this.oneNumber) {
          this.numbersArray.push(Number(this.oneNumber));

          this.oneNumber = "";

      }
      this.signsArray.push('*');
      console.log(this.signsArray);
      console.log(this.numbersArray);
  }

  pressDivideAction() {
    if(this.oneNumber) {
        this.numbersArray.push(Number(this.oneNumber));

        this.oneNumber = "";

    }
    this.signsArray.push('/');
    console.log(this.signsArray);
    console.log(this.numbersArray);
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
      }
      if(this.signsArray.length >= this.numbersArray.length) {
          this.signsArray.length = this.numbersArray.length - 1;
      }
      console.log(this.signsArray);
      console.log(this.numbersArray);
    for (let i = 0; i < this.signsArray.length; i++ ) {
      if (this.signsArray[i] === '+') {
        this.result = this.sum(this.numbersArray.shift(), this.numbersArray.shift());
        this.numbersArray.unshift(this.result);
      }
      if (this.signsArray[i] === '-') {
        this.result = this.subtraction(this.numbersArray.shift(), this.numbersArray.shift());
        this.numbersArray.unshift(this.result);
      }
      if (this.signsArray[i] === '*') {
        this.result = this.multiply(this.numbersArray.shift(), this.numbersArray.shift());
        this.numbersArray.unshift(this.result);
      }
      if (this.signsArray[i] === '/') {
        this.result = this.divide(this.numbersArray.shift(), this.numbersArray.shift());
        this.numbersArray.unshift(this.result);
      }
    }

    if (this.result.toString().length > 12) {
        if(this.result > 9999999999e9 || this.result < -9999999999e9) { //bug for negative numbers and numbers with a comma
            this.result = "value exceeded";
        } else {
            this.result = this.result.toString().slice(0,10) + "e" + (this.result.toString().length-10);
        }


    }

    document.getElementById(`output-screen_${id}`).textContent = this.result;
      this.signsArray = [];
      this.numbersArray = [];
      this.oneNumber = this.result;
  }

  sum(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}


new Calculator('.calculator-1');
new Calculator('.calculator-2');
