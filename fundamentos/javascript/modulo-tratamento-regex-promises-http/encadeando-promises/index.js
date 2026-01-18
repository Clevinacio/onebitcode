function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18);
    } else {
      reject(new Error("age is required"));
    }
  });
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear);
    } else {
      reject(new Error("birthday is required"));
    }
  });
}

// Formato sem encadeamento
getAge("1995-09-02")
  .then((age) => {
    checkAge(age)
      .then((isOver18) => {
        // Chama a promise dentro do then da outra promise
        if (isOver18) {
          console.log("Maior de idade");
        } else {
          console.log("Menor de idade");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err.message);
  });

// Formato com encadeamento
getAge("2009-09-02")
  .then((age) => checkAge(age)) // Retorna a promise diretamente com abreviação da arrow function
  .then((isOver18) => {
    if (isOver18) {
      console.log("Maior de idade");
    } else {
      console.log("Menor de idade");
    }
  })
  .catch((err) => {
    console.log(err.message); // diminui reescrita de código para tratar erros
  });
