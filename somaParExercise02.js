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
