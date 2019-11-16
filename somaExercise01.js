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
