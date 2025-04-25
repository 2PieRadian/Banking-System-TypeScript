import { Account } from "./account";

export class SavingsAccount extends Account implements InterestCalculable {
  private static interestRate = 0.04;
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

  calculateInterest(years: number): number {
    if (years < 0) throw new Error("Invalid Time Period");
    return this.balance * SavingsAccount.interestRate * years;
  }
}
