// 8) Uma função é chamada da seguinte forma:
// calculadora(10, '+', 20)
// crie o corpo da função de forma que ela realize as 4 operações aritméticas

const calculadora = (num1, operator, num2) => eval(`${num1}${operator}${num2}`);

console.log("subtração=" + calculadora(10, "-", 20));
console.log("adição=" + calculadora(10, "+", 20));
console.log("multiplicação=" + calculadora(10, "*", 20));
console.log("divisão=" + calculadora(10, "/", 20));
