function waitFor(seconds) {
  // função para esperar um certo número de segundos
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

const numbers = [4, 5, 9, 13, 77];

// função assíncrona para calcular o quadrado
async function square(number) {
  await waitFor(2);
  return number * number;
}

// função principal assíncrona
async function execute() {
  console.time("map");

  const squares = await Promise.all(numbers.map(square)); // mapeia os números para suas versões ao quadrado

  console.log(squares); // exibe os resultados

  console.timeEnd("map");
}

execute();
