import "../styles/styles.scss";
import "../index.html";
import createHtmlForCalculator from "./markupCalculator";
import randomId from "./randomId"

class Calculator {
  constructor(elem) {
    this.signsArray = [];
    this.numbersArray = [];
    this.oneNumber = "";
    this.result = "";
    this.memory = 0;
    this.elem = elem;
    this.calculatorId = randomId();
    this.memoryLabel = "Memory: ";
    this.htmlForCalculator = createHtmlForCalculator(this.calculatorId, this.memoryLabel);

    this.init();
  }

  init() {
    document.querySelector(this.elem).innerHTML = this.htmlForCalculator;
    document.querySelector(`#table_${this.calculatorId}`).addEventListener('click', this.createEventListener.bind(this));
    document.querySelector(`#table_${this.calculatorId}`).addEventListener('focus', this.createFocusEventListener.bind(this));
    document.querySelector(`#output-screen_${this.calculatorId}`).textContent = "0";
  }

  createKeyboardEventListener(event) {
    console.log("liza-key");

    let chr = event.key;

    if (chr > '0' || chr < '9') {
      this.keypressNumberAction(chr, this.calculatorId);
    } 
    if (chr === '+') {
      this.pressPlusAction();
    }

    if (chr === '=' || 'Enter') {
      this.pressEqualSignAction();
    }
    console.log(event.key + "----" + event.charCode);
  }

  createFocusEventListener(event) {
    document.querySelector(`#table_${this.calculatorId}:focus`).addEventListener('keypress', this.createKeyboardEventListener.bind(this));
  }

  createEventListener(event) {
    let target = event.target;
    console.log(target);
  
    console.log(this.oneNumber.length);
  
    if ((target.classList.contains('number')) && this.oneNumber.toString().length < 12) {
      this.pressNumberAction(target, this.calculatorId);
    }

    if (target.classList.contains('dot')) {
      this.pressDotAction(target, this.calculatorId);
    }

    if (target.classList.contains('plus')) {
        this.pressPlusAction();
    }
    if (target.classList.contains('subtraction')) {
      this.pressSubtractionAction();
    }

    if (target.classList.contains('multiply')) {
        this.pressMultiplyAction();
    }
    if (target.classList.contains('divide')) {
      this.pressDivideAction();
    }

    if (target.classList.contains('equal-sign')) {
        this.pressEqualSignAction(this.calculatorId);
    }

    if (target.classList.contains('clear')) {
        this.pressClearAction(this.calculatorId);
    }

    if (target.classList.contains('reversion-sign')) {
      this.pressRevertSignAction(this.calculatorId);
    }

    if (target.classList.contains('memory-plus')) {
      this.pressMemoryPlusAction(this.calculatorId);
    }

    if (target.classList.contains('memory-minus')) {
      this.pressMemoryMinusAction(this.calculatorId);
    }

    if (target.classList.contains('memory-read')) {
      this.pressMemoryReadAction(this.calculatorId);
    }

    if (target.classList.contains('memory-clear')) {
      this.pressMemoryClearAction(this.calculatorId);
    }
  }

  pressNumberAction(targetButton, id) { //debugger
    if(this.signsArray.length !== this.numbersArray.length) {
        this.signsArray.splice(this.numbersArray.length - 1,this.signsArray.length - this.numbersArray.length);
    }
    console.log(this.numbersArray.length);
    console.log(this.signsArray.length);
    if(this.result === this.oneNumber) {
        this.oneNumber = "";
        this.result = '';
    } 
    
    if(this.oneNumber[0] === "0" && this.oneNumber.length === 1 && targetButton.value === "0") {
      this.oneNumber += ""; 
    } else {
      if(this.oneNumber[0] === "0" && this.oneNumber.length === 1 && this.oneNumber[1] !== ".") {
        this.oneNumber = this.oneNumber.slice(1, this.oneNumber.length);
      }
      this.oneNumber += targetButton.value;
    }    
    
    console.log(this.oneNumber);
    document.querySelector(`#output-screen_${id}`).textContent = this.oneNumber;
  }

  keypressNumberAction(chr, id) { //debugger
    if(this.signsArray.length !== this.numbersArray.length) {
        this.signsArray.splice(this.numbersArray.length - 1,this.signsArray.length - this.numbersArray.length);
    }
    console.log(this.numbersArray.length);
    console.log(this.signsArray.length);
    if(this.result === this.oneNumber) {
        this.oneNumber = "";
        this.result = '';
    } 
    
    if(this.oneNumber[0] === "0" && this.oneNumber.length === 1 && char === "0") {
      this.oneNumber += ""; 
    } else {
      if(this.oneNumber[0] === "0" && this.oneNumber.length === 1 && this.oneNumber[1] !== ".") {
        this.oneNumber = this.oneNumber.slice(1, this.oneNumber.length);
      }
      this.oneNumber += chr;
    }    
    
    console.log(this.oneNumber);
    document.querySelector(`#output-screen_${id}`).textContent = this.oneNumber;
  }

  pressDotAction(targetButton, id) { 
    if(this.result === this.oneNumber) {
      this.oneNumber = "";
    }  
    
    if(this.oneNumber.indexOf(".") < 0) {
      this.oneNumber += targetButton.value;
    }
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
      document.getElementById(`output-screen_${id}`).textContent = '0';
      this.signsArray = [];
      this.numbersArray = [];
      this.oneNumber = "";
      this.result = 0;
  }

  pressRevertSignAction(id) {
    if(this.oneNumber > 0) {
      this.oneNumber = "-" + this.oneNumber;
    } else {
      this.oneNumber = this.oneNumber.slice(1, this.oneNumber.length);
    }

    document.querySelector(`#output-screen_${id}`).textContent = this.oneNumber;
  }

  pressMemoryPlusAction(id) {
    this.memory = this.memory + ( + document.querySelector(`#output-screen_${id}`).textContent); 
    document.querySelector(`#output-memory_${id}`).textContent = this.memoryLabel + this.memory;
    this.oneNumber = "";   
  }

  pressMemoryMinusAction(id) {
    this.memory = this.memory - document.querySelector(`#output-screen_${id}`).textContent; 
    document.querySelector(`#output-memory_${id}`).textContent = this.memoryLabel + this.memory;
    this.oneNumber = "";   
  }

  pressMemoryReadAction(id) {
    console.log("memory----  " + this.memory);
    this.oneNumber = this.memory;
    document.querySelector(`#output-screen_${id}`).textContent = this.oneNumber;
  }

  pressMemoryClearAction(id) {
    this.memory = 0;
    document.querySelector(`#output-memory_${id}`).textContent = this.memoryLabel;
  }

  pressEqualSignAction(id) {
    if(this.oneNumber) {
        this.numbersArray.push(Number(this.oneNumber));

        this.oneNumber = "";
    }
    if(this.numbersArray.length === 1) {
      this.result = this.numbersArray[0];
      document.getElementById(`output-screen_${id}`).textContent = this.result;

      console.log("Hi!!!!");

      this.signsArray = [];
      this.numbersArray = [];
      this.oneNumber = this.result;
      return;
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

    if (this.result.toString().length > 12) { //debugger
        if(this.result > 9.9999999e18 || this.result < -9.9999999e18) { //bug for negative numbers and numbers with a comma
            this.result = "value exceeded";
        } else {
            this.result = Number(this.result).toExponential(7);
        }
    }

    document.getElementById(`output-screen_${id}`).textContent = this.result;

    console.log("Hi!!!!");

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

