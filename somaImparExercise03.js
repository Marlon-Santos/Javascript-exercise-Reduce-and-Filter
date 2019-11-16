// 3) Dado um vetor de números, como poderia ser realizada a soma de todos
// os valores ímpares utilizando reduce e filter.

const vetImpar = [2, 7, 10, 20, 36, 81, 109, 505, 1000];

const somaImpar = vetImpar
  .filter(item => item % 2 !== 0)
  .reduce((previous, current) => {
    console.log(previous + "+" + current);
    return previous + current;
  }, 0);

console.log("result=" + somaImpar);

//*****************************************************************************
