// exercicio 25: refatorando para usar Promises

async function asyncImc(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number")
    return Promise.reject("arguments must be of type number");
  else return weight / (height * height);
}

async function showImc(weight, height) {
  try {
    console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`);
    const result = await asyncImc(weight, height);
    console.log(`O resultado do IMC foi de ${result}.`);
    if (result < 18.5) console.log("Situação: MAGREZA");
    else if (result < 25) console.log("Situação: NORMAL");
    else if (result < 30) console.log("Situação: SOBREPESO");
    else if (result < 40) console.log("Situação: OBESIDADE");
    else console.log("Situação: OBESIDADE GRAVE");
  } catch (err) {
    console.log(err);
  }
}

const imcs = [
  [71, 1.74],
  [48, 1.6],
  [71, "texto"],
  [82, 1.72],
  [120, 1.8],
];

Promise.all(imcs.map(([weight, height]) => showImc(weight, height))).catch(
  (err) => {
    console.log(err);
  },
);
