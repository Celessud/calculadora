import Calculator from "./Models/Calculator.js";

/* Variable temporal para contener el resultado */
let resultado = 0;

/* Instaciación de la clase para obtener un objeto */
const calc = new Calculator();

// Esto se la simulación de que se recibio mediante prompt
const num1 = 10;
const num2 = 5;

/** Operacion suma mediante mi obj Calculadora */
resultado = calc.sum(num1, num2);
console.log(`El resultado de la suma es: ${resultado}`);

/** Operacion resta mediante mi obj Calculadora */
resultado = calc.substract(num1, num2);
console.log(`El resultado de la resta es: ${resultado}`);

/** Operacion multiplicación mediante mi obj Calculadora */
resultado = calc.multiply(num1, num2);
console.log(`El resultado de la multiplicación es: ${resultado}`);

/** Operacion división mediante mi obj Calculadora */
resultado = calc.divide(num1, num2);
console.log(`El resultado de la división es: ${resultado}`);
