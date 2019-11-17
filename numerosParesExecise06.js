// 6) Dado um vetor com números, retorne somente os números pares;

const vetNumbers = [2, 10, 11, 50, 61, 88, 91, 502, 3003, 5580, 9723, 10576];

const numEven = vetNumbers.filter(item => item % 2 === 0); //sem função

const numEvenfn = array => array.filter(item => item % 2 === 0); //com função;

console.log(
  "sem função=" +
    numEven +
    "; com função=" +
    numEvenfn(vetNumbers) +
    "; outo ex com função=" +
    numEvenfn([10, 30, 111, 69, 2, 8, 3697, 3568, 3502])
);
