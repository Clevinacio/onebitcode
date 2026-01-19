function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("arguments must be of type number");
    } else {
      resolve(a + b);
    }
  });
}

function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject("arguments must be of type number");
    } else {
      resolve(a - b);
    }
  });
}

const sumResult = asyncSum(50, 33);
const subtractResult = asyncSubtract(50, 33);

Promise.all([sumResult, subtractResult]) // executando várias promises em paralelo
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });

// executando um mesma promise repetidamente a partir de um array
const numbers = [4, 9, 5, 13, 77]; // array de números

function asyncSquare(x) {
  // função que retorna o quadrado de um número
  return new Promise((resolve, reject) => {
    resolve(x * x);
  });
}

Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
  // chamada da função para cada número do array
  console.log(squares);
});
