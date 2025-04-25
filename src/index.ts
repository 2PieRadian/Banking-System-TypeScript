import { Account } from "./account";
import { Bank } from "./bank";
import { FixedDepositAccount } from "./fixed-deposit-account";
import { SavingsAccount } from "./savings-account";

// /*
// -------------------- Bank Class --------------------
// const bank: Bank = new Bank();
// console.log(bank);
// const x = bank.createAccount("Raman", "SAVINGS");
// console.log(bank);
// bank.getAccount(x.getAccountNumber())?.deposit(1000);
// console.log(bank);

// console.log(bank.getAccount(x.getAccountNumber())?.getTransactionHistory());

const SBI: Bank = new Bank();

SBI.createAccount("Eraser Head", "SAVINGS");
SBI.createAccount("Ash Ketchum", "SAVINGS");
SBI.createAccount("Izuku Midoria", "SAVINGS");

console.log(SBI);

// ---------------------------------------------------------------
// */

/*
-------------------- Savings Account --------------------
const savingsAccount: Account = new SavingsAccount("Raman");
savingsAccount.deposit(350000);
console.log(savingsAccount);

savingsAccount.withdraw(50000);
console.log(savingsAccount);

savingsAccount.withdraw(300000);
console.log(savingsAccount);
---------------------------------------------------------
*/

// /*
// -------------------- Fixed Deposit Account --------------------
// const fd: Account = new FixedDepositAccount("VARU", 10);
// fd.deposit(30_00_000);
// console.log(fd);
// setInterval(() => {
//   console.log(
//     "Interest : " +
//       (fd as FixedDepositAccount).calculateInterest() +
//       "\tAmount : " +
//       fd.getBalance() +
//       (fd as FixedDepositAccount).calculateInterest()
//   );
// }, 1000);

// const fd: FixedDepositAccount = new FixedDepositAccount("Batman", 5);
// console.log(fd);
// fd.deposit(1000);
// setInterval(() => {
//   console.log("Interest: " + fd.calculateInterest());
// }, 2000);

// ---------------------------------------------------------------
// */
