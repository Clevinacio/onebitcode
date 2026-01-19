async function asyncSum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Invalid input: Both arguments must be numbers.");
  }
  return a + b;
}

async function asynSubtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return Promise.reject("Invalid input: Both arguments must be numbers.");
  }
  return a - b;
}

Promise.all([asyncSum(5, 3), asynSubtract(10, null)])
  .then((results) => {
    console.log(`Sum: ${results[0]}, Subtract: ${results[1]}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const numbers = [4, 9, 5, 13, 77];

async function asyncSquare(n) {
  return n * n;
}

Promise.all(numbers.map(asyncSquare))
  .then((squaredNumbers) => {
    console.log("Squared Numbers:", squaredNumbers);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
