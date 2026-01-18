function validateEmail(email) {
  //validate email format: xx@xx.xx (with at least two characters before and after @ and .)
  const emailRegex = /^[^\s@]{2,}@[^\s@]{2,}\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    const error = new Error("Email inválido!");
    error.input = "email";
    throw error;
  }
}

function validatePassword(password) {
  // validate password format: at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character of any type
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\s0-9])([^\n]){8,}$/;
  if (!passwordRegex.test(password)) {
    const error = new Error(
      "Senha inválida! Deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.",
    );
    error.input = "password";
    throw error;
  }
}

function clearFormStyles() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.classList.remove("error");
    input.classList.remove("success");
  });
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";
}

function submit() {
  clearFormStyles();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const name = document.getElementById("name");
  try {
    name.classList.add("success");
    validateEmail(email.value);
    email.classList.add("success");
    validatePassword(password.value);
    password.classList.add("success");
  } catch (error) {
    if (error.input === "email") {
      email.classList.add("error");
      document.querySelector("#email-error").textContent = error.message;
    } else if (error.input === "password") {
      password.classList.add("error");
      document.querySelector("#password-error").textContent = error.message;
    }
  }
}

const form = document.getElementById("loginForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
