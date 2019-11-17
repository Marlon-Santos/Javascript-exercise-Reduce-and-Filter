// 9) Modifique a calculadora do exercício anterior para que
// ela receba 2 números e uma função, e realize o cálculo. Exemplo:
// const soma = (num1, num2) => num1+num2
// const calculadoraFn = (....) => ....
// calculadoraFn(10, soma, 20)

const subtracao = (num1, num2) => num1 - num2;
const soma = (num1, num2) => num1 + num2;
const multiplicacao = (num1, num2) => num1 * num2;
const divisao = (num1, num2) => num1 / num2;

const calculadoraFn = (num1, operatorFn, num2) => operatorFn(num1, num2);

console.log("subtração=" + calculadoraFn(10, subtracao, 20));
console.log("adição=" + calculadoraFn(10, soma, 20));
console.log("multiplicação=" + calculadoraFn(10, multiplicacao, 20));
console.log("divisão=" + calculadoraFn(10, divisao, 20));
