import { Account } from "./account";

export class SavingsAccount extends Account {
  constructor(accountHolder: string) {
    super(accountHolder);
  }

  withdraw(amount: number): void {
    if (amount < 0) {
      throw new Error("Amount must be positive!");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient Funds!");
    }

    this.balance -= amount;
    this.transactions.push({
      type: "WITHDRAW",
      amount: amount,
      timestamp: new Date(),
      description: `Widthdrawing an amount of: ${amount} Rs from account no ${this.accountNumber}`,
    });
  }
}
