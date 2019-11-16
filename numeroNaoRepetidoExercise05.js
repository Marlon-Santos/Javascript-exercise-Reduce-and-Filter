// 5) Dado um vetor de valores, retorne um vetor com somente os valores únicos
// do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor)
// (Dica 1: utilize reduce, filter e keys,
// Dica 2: escreva console.log(objeto.keys()) e veja
// como ele poderá te ajudar neste exercício)

const vetValues = [100, 30, 70, 50, 70, "marlon", 30];

const notRepeatedNumbers = vetValues.reduce((previous, current) => {
  previous[current] ? (previous[current] = false) : (previous[current] = true);
  return previous;
}, {});
const vetAllValues = Object.values(notRepeatedNumbers)
  .map((item, index) => item && index)
  .filter(item => item !== false);
const vetNotRepeatedNumbers = vetAllValues.map(
  index => Object.keys(notRepeatedNumbers)[index]
);
console.log(vetNotRepeatedNumbers);

//*****************************************************************************
