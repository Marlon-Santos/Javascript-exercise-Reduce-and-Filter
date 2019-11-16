// 1) Dado um vetor de números, como poderia ser realizada a soma de todos
// os valores utilizando reduce.
console.log("************Exercicio 1***********");

const vetNumber = [10, 30, 50, 100, 200];

const soma = vetNumber.reduce((previous, current) => {
  console.log(previous + "+" + current);
  return previous + current;
}, 0);

console.log("resultado=" + soma);

//***************************************************************************** */

// 2) Dado um vetor de números, como poderia ser realizada a soma de todos
// os valores pares utilizando reduce e filter.
console.log("************Exercicio 2***********");

const vetPares = [59, 39, 200, 21, 252, 1021];

const somaPares = vetPares
  .filter(item => item % 2 === 0)
  .reduce((previous, current) => {
    console.log(previous + "+" + current);
    return previous + current;
  }, 0);

console.log("resultado=" + somaPares);

//***************************************************************************** */
