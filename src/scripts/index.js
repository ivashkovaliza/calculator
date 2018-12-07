import '../styles/styles.scss';
import '../index.html';
import createHtmlForCalculator from './markupCalculator';
import randomId from './randomId'

//constants
const memoryLabel = 'Memory: ';
const defaultOutputValue = '0';

class Calculator {
  constructor(elem) {
    this.signsArray = [];
    this.numbersArray = [];
    this.oneNumber = '';
    this.result = '';
    this.memory = 0;
    this.elem = elem;
    this.calculatorId = randomId();
    this.htmlForCalculator = createHtmlForCalculator(this.calculatorId, memoryLabel);

    this.init();
  }

  init() {
    document.querySelector(this.elem).innerHTML = this.htmlForCalculator;
    document.querySelector(`#calculator_${this.calculatorId}`).addEventListener('click', this.createEventListener.bind(this));
    document.querySelector(`#calculator_${this.calculatorId}`).addEventListener('focus', this.createFocusEventListener.bind(this));
    document.querySelector(`#output-screen_${this.calculatorId}`).textContent = defaultOutputValue;
  }

  createKeyboardEventListener(event) {
    const validKeys= ['0','1','2','3','4','5','6','7','8','9','.','Enter','/','*','-','+'];
    let chr = event.key;
    
    if (validKeys.includes(event.key)) {
      if (chr > '0' && chr < '9') {
        if (this.oneNumber.toString().length < 12) {
          this.pressNumberAction('', chr);
        }
      }      
      if (chr === '.') {
        this.pressDotAction('', chr);
      }
      if (chr === '+') {
        this.pressPlusAction();
      }
      if (chr === '-') {
        this.pressSubtractionAction();
      }
      if (chr === '*') {
        this.pressMultiplyAction();
      }
      if (chr === '/') {
        this.pressDivideAction();
      }
      if (chr === '=' || chr ==='Enter') {
        this.pressEqualSignAction();
      }
    } else {
      return false;
    }
  }

  createFocusEventListener(event) {
    document.querySelector(`#calculator_${this.calculatorId}:focus`).addEventListener('keypress', this.createKeyboardEventListener.bind(this));
  }

  createEventListener(event) {
    let target = event.target;
  
    if ((target.classList.contains('number')) && this.oneNumber.toString().length < 12) {
      this.pressNumberAction(target);
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
        this.pressEqualSignAction();
    }

    if (target.classList.contains('clear')) {
        this.pressClearAction();
    }

    if (target.classList.contains('reversion-sign')) {
      this.pressRevertSignAction();
    }

    if (target.classList.contains('memory-plus')) {
      this.pressMemoryPlusAction();
    }

    if (target.classList.contains('memory-minus')) {
      this.pressMemoryMinusAction();
    }

    if (target.classList.contains('memory-read')) {
      this.pressMemoryReadAction();
    }

    if (target.classList.contains('memory-clear')) {
      this.pressMemoryClearAction();
    }
  }

  pressNumberAction(targetButton, targetKeybordButton) {
    if (this.signsArray.length !== this.numbersArray.length) {
        this.signsArray.splice(this.numbersArray.length - 1,this.signsArray.length - this.numbersArray.length);
    }
    
    if (this.result === this.oneNumber) {
        this.oneNumber = '';
        this.result = '';
    } 
    
    if (this.oneNumber[0] === '0' && this.oneNumber.length === 1 && (targetButton.value === '0' || targetKeybordButton === '0')) {
      this.oneNumber += ''; 
    } else {
      if (this.oneNumber[0] === '0' && this.oneNumber.length === 1 && this.oneNumber[1] !== '.') {
        this.oneNumber = this.oneNumber.slice(1, this.oneNumber.length);
      }
      this.oneNumber += targetButton.value || targetKeybordButton;
    }    
    
    document.querySelector(`#output-screen_${this.calculatorId}`).textContent = this.oneNumber;
  }

  pressDotAction(targetButton, targetKeybordButton) { 
    if (this.result === this.oneNumber) {
      this.oneNumber = '';
    }  
    
    if (this.oneNumber.indexOf('.') < 0) {
      this.oneNumber += targetButton.value || targetKeybordButton;
    }
   
    document.querySelector(`#output-screen_${this.calculatorId}`).textContent = this.oneNumber;
  }

  pressPlusAction() {
    if (this.oneNumber) {
      this.numbersArray.push(Number(this.oneNumber));
      this.oneNumber = '';
    }

    this.signsArray.push('+');
  }

  pressSubtractionAction() {
    if (this.oneNumber) {
      this.numbersArray.push(Number(this.oneNumber));
      this.oneNumber = '';
    }

    this.signsArray.push('-');
  }

  pressMultiplyAction() {
    if (this.oneNumber) {
        this.numbersArray.push(Number(this.oneNumber));
        this.oneNumber = '';
    }
    this.signsArray.push('*');
  }

  pressDivideAction() {
    if (this.oneNumber) {
        this.numbersArray.push(Number(this.oneNumber));
        this.oneNumber = '';
    }
    this.signsArray.push('/');
  }

  pressClearAction() {
    document.getElementById(`output-screen_${this.calculatorId}`).textContent = defaultOutputValue;
    this.signsArray = [];
    this.numbersArray = [];
    this.oneNumber = '';
    this.result = 0;
  }

  pressRevertSignAction() {
    if (this.oneNumber > 0) {
      this.oneNumber = '-' + this.oneNumber;
    } else {
      this.oneNumber = this.oneNumber.slice(1, this.oneNumber.length);
    }

    document.querySelector(`#output-screen_${this.calculatorId}`).textContent = this.oneNumber;
  }

  pressMemoryPlusAction() {
    this.memory = this.memory + ( + document.querySelector(`#output-screen_${this.calculatorId}`).textContent); 
    document.querySelector(`#output-memory_${this.calculatorId}`).textContent = memoryLabel + this.memory;
    this.oneNumber = '';   
  }

  pressMemoryMinusAction() {
    this.memory = this.memory - document.querySelector(`#output-screen_${this.calculatorId}`).textContent; 
    document.querySelector(`#output-memory_${this.calculatorId}`).textContent = memoryLabel + this.memory;
    this.oneNumber = '';   
  }

  pressMemoryReadAction() {
    this.oneNumber = this.memory;
    document.querySelector(`#output-screen_${this.calculatorId}`).textContent = this.oneNumber;
  }

  pressMemoryClearAction() {
    this.memory = 0;
    document.querySelector(`#output-memory_${this.calculatorId}`).textContent = memoryLabel;
  }

  pressEqualSignAction() {
    if (this.oneNumber) {
      this.numbersArray.push(Number(this.oneNumber));
      this.oneNumber = '';
    }

    if (this.numbersArray.length === 1) {
      this.result = this.numbersArray[0];
      document.getElementById(`output-screen_${this.calculatorId}`).textContent = this.result;
      this.signsArray = [];
      this.numbersArray = [];
      this.oneNumber = this.result;
      return;
    }

    if (this.signsArray.length >= this.numbersArray.length) {
        this.signsArray.length = this.numbersArray.length - 1;
    }
   
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
        if (this.result > 9.9999999e18 || this.result < -9.9999999e18) {
            this.result = 'value exceeded';
        } else {
            this.result = Number(this.result).toExponential(7);
        }
    }

    document.getElementById(`output-screen_${this.calculatorId}`).textContent = this.result;
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

