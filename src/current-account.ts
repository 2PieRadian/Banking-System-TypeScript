import { Account } from "./account";

export class CurrentAccount extends Account {
  constructor(accountHolder: string) {
    super(accountHolder);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient Funds!");
    }

    this.balance -= amount;
    this.transactions.push({
      type: "WITHDRAW",
      amount: amount,
      timestamp: new Date(),
      description: `Withdrawing ${amount} Rs from account ${this.accountNumber}`,
    });
  }
}
