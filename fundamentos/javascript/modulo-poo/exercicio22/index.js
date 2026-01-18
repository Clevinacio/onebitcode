const App = require("./App");

// Creating users
App.createUser("clevinacio@email.com", "Cleverton Inácio");
App.createUser("anotheruser@email.com", "Another User");
App.createUser("thirduser@email.com", "Third User");

// Making deposits
App.deposit("clevinacio@email.com", 100);
App.deposit("anotheruser@email.com", 200);
App.deposit("thirduser@email.com", 300);

// Making transfers
App.transfer("clevinacio@email.com", "anotheruser@email.com", 50);
App.transfer("anotheruser@email.com", "thirduser@email.com", 100);

// changing loan fee
App.changeLoanFee(10);

// Taking loans
App.takeLoan("clevinacio@email.com", 500, 12);

// Checking users' balances
const user1 = App.findUser("clevinacio@email.com");
const user2 = App.findUser("anotheruser@email.com");
const user3 = App.findUser("thirduser@email.com");
console.log(`${user1.fullname} balance: $${user1.account.balance}`);
console.log(`${user2.fullname} balance: $${user2.account.balance}`);
console.log(`${user3.fullname} balance: $${user3.account.balance}`);

// Checking loan details
const loan = user1.account.loans[0];
console.log(
  `Loan for ${user1.fullname}: $${loan.value} in ${loan.installments.length} installments of $${loan.installments[0].value} each.`,
);

// show all installments status
loan.installments.forEach((installment) => {
  console.log(
    `Installment ${installment.number}: $${installment.value} - Status: ${installment.status}`,
  );
});

//pay one installment
loan.installments[0].status = "paid";
console.log(
  `After paying the first installment, Installment ${loan.installments[0].number} status: ${loan.installments[0].status}`,
);

// Checking updated loan details
console.log(
  `Updated Loan for ${user1.fullname}: $${loan.value} in ${loan.installments.length} installments.`,
);
