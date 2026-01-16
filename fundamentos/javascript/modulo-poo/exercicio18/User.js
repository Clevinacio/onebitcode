export default class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    const isEmailValid = this.email === email;
    const isPasswordValid = this.password === password;
    if (isEmailValid && isPasswordValid) {
      console.log(`Login bem sucedido! Olá, ${this.fullname}`);
    } else {
      console.log(
        `Login para ${this.email} inválido! Verifique o email ou senha e tente novamente`
      );
    }
  }
}
