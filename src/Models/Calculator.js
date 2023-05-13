class Calculator {
  constructor() {
    this._result = 0;
  }

  result() {
    return this._result;
  }

  sum(num1, num2) {
    return num1 + num2;
  }

  substract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    return num1 / num2;
  }
}

export default Calculator;
