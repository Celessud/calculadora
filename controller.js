import element from "./accessElements.js";

// Modular Functions
const calcOperationContent = () => element.calcOperation.textContent;

const lastCharacter = () => calcOperationContent().slice(-1);

const calcOperationIsEmpty = () => lastCharacter() == "";

const resultIsZero = () => element.result.textContent == 0;

function isSpecialCharacter(character) {
  const specialsChars = ["+", "-", "*", "/", ".", "%"];
  return specialsChars.includes(character);
}

const lastCharIsSpecial = () => isSpecialCharacter(lastCharacter());

function concatChar(character) {
  if (calcOperationIsEmpty() && isSpecialCharacter(character)) return;

  element.calcOperation.innerHTML += character;
}

function concatNumber() {
  concatChar(this.textContent);
}

function concatSpecialChar() {
  !lastCharIsSpecial() && concatChar(this.value);
}

function concatPercent() {
  if (calcOperationIsEmpty()) return;

  const currentVal = eval(calcOperationContent());

  const valuePercent = currentVal / 100;

  element.calcOperation.innerHTML = valuePercent + "*";
}

const resetOperation = () => {
  element.calcOperation.innerHTML = "";
  element.result.innerHTML = 0;
};

const invertCalcOperation = () => {
  if (!resultIsZero()) {
    element.calcOperation.innerHTML = -eval(calcOperationContent());
    operate();
  }
};

const clean = () => {
  if (!calcOperationIsEmpty()) {
    const beforeVal = calcOperationContent().slice(0, -1);
    element.calcOperation.innerHTML = beforeVal;
  }
};

const operate = () => {
  if (!calcOperationIsEmpty()) {
    element.result.innerHTML = eval(calcOperationContent());
  }
};

// Listeners Numerics
element.btn1.addEventListener("click", concatNumber);
element.btn2.addEventListener("click", concatNumber);
element.btn3.addEventListener("click", concatNumber);
element.btn4.addEventListener("click", concatNumber);
element.btn5.addEventListener("click", concatNumber);
element.btn6.addEventListener("click", concatNumber);
element.btn7.addEventListener("click", concatNumber);
element.btn8.addEventListener("click", concatNumber);
element.btn9.addEventListener("click", concatNumber);
element.btn0.addEventListener("click", concatNumber);

// Listener Special Buttons
element.btnPercent.addEventListener("click", concatPercent);
element.btnDivide.addEventListener("click", concatSpecialChar);
element.btnMultiply.addEventListener("click", concatSpecialChar);
element.btnSubstract.addEventListener("click", concatSpecialChar);
element.btnAdd.addEventListener("click", concatSpecialChar);
element.btnDecimal.addEventListener("click", concatSpecialChar);

// Others listener
element.btnAC.addEventListener("click", resetOperation);
element.btnInvert.addEventListener("click", invertCalcOperation);
element.btnClean.addEventListener("click", clean);
element.btnOperate.addEventListener("click", operate);
