const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");
const User = require("./User");

module.exports = class App {
  static #users = [];

  static findUser(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null;
  }

  static createUser(email, fullname) {
    const usersExists = this.findUser(email);
    if (!usersExists) {
      const newUser = new User(email, fullname);
      this.#users.push(newUser);
    } else {
      console.log("User already exists!");
    }
  }

  static deposit(userEmail, value) {
    const user = this.findUser(userEmail);
    if (user) {
      const deposit = new Deposit(value);
      user.account.addDeposit(deposit);
    } else {
      console.log("User not found!");
    }
  }

  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = this.findUser(fromUserEmail);
    const toUser = this.findUser(toUserEmail);
    if (fromUser && toUser) {
      const transfer = new Transfer(fromUser, toUser, value);
      fromUser.account.addTransfer(transfer);
      toUser.account.addTransfer(transfer);
    } else {
      console.log("User(s) not found!");
    }
  }

  static takeLoan(userEmail, value, numbOfInstallments) {
    const user = this.findUser(userEmail);
    if (user) {
      const loan = new Loan(value, numbOfInstallments);
      user.account.addLoan(loan);
    } else {
      console.log("User not found!");
    }
  }

  static changeLoanFee(newFeePercentage) {
    Loan.fee = newFeePercentage;
  }
};
