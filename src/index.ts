import { Account } from "./account";
import { FixedDepositAccount } from "./fixed-deposit-account";
import { SavingsAccount } from "./savings-acount";

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

/*
-------------------- Fixed Deposit Account --------------------
const fd: Account = new FixedDepositAccount("VARU", 10);
fd.deposit(30_00_000);
console.log(fd);
setInterval(() => {
  console.log(
    "Interest : " +
      (fd as FixedDepositAccount).calculateInterest() +
      "\tAmount : " +
      fd.getBalance() +
      (fd as FixedDepositAccount).calculateInterest()
  );
}, 1000);
---------------------------------------------------------------
*/
