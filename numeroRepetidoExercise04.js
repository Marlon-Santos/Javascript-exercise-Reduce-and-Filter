// 4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor
//  está presente no vetor (dica: utilize reduce)

const vetRepeatedNumbers = [100, 100, 70, 100, 50, 50, "marlon", 70, "marlon"];

const repeatedNumbers = vetRepeatedNumbers.reduce((previous, current) => {
  previous[current]
    ? (previous[current] = previous[current] + 1)
    : (previous[current] = 1);
  return previous;
}, {});

console.log(repeatedNumbers);

//*****************************************************************************
