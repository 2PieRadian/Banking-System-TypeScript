import { Account } from "./account";

export class FixedDepositAccount extends Account implements InterestCalculable {
  private startDate: Date;
  private maturityDate: Date;
  private interestRate: number;

  constructor(accountHolderName: string, years: number) {
    super(accountHolderName);
    this.startDate = new Date();
    this.interestRate = 0.07;
    this.maturityDate = new Date();
    this.maturityDate.setFullYear(this.maturityDate.getFullYear() + years);
  }

  withdraw(amount: number): void {
    if (new Date() < this.maturityDate) {
      throw new Error("Cannot withdraw before maturity date");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }

    this.balance -= amount;
    this.transactions.push({
      type: "WITHDRAW",
      amount: amount,
      timestamp: new Date(),
      description: `Withdrawn from Fixed Deposit account, Acc No : ${this.accountNumber}`,
    });
  }

  calculateInterest(): number {
    const now = new Date();
    let elapsedTime = now.getTime() - this.startDate.getTime();

    // If the FD period is over, cap it to the [FD Duration]
    const maturityTime = this.maturityDate.getTime();
    if (now.getTime() > maturityTime) {
      elapsedTime = maturityTime - this.startDate.getTime();
    }

    const yearsPassed = elapsedTime / (365 * 24 * 60 * 60 * 1000);
    return this.balance * this.interestRate * yearsPassed;
  }
}
