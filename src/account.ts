// We used an abstract class here because this class has to provide a default body for its
// child classes to inherit from.  If it were an interface, we couldn't have been able to do it.

export abstract class Account {
  protected balance: number;
  protected accountNumber: string;
  protected accountHolderName: string;
  protected transactions: Transaction[];

  constructor(accountHolderName: string) {
    this.balance = 0;
    this.accountHolderName = accountHolderName;
    this.accountNumber = Account.generateAccountNumber();
    this.transactions = [];
  }

  deposit(amount: number) {
    if (amount < 0) {
      throw new Error("Amount must be positive!");
    }

    this.balance += amount;
    this.transactions.push({
      type: "DEPOSIT",
      amount: amount,
      timestamp: new Date(),
      description: `Saving ${amount}Rs to account ${this.accountNumber}`,
    });
  }

  abstract withdraw(amount: number): void;

  static generateAccountNumber(): string {
    return Math.floor(Math.random() * 10000000000).toString();
  }

  getAccountHolderName(): string {
    return this.accountHolderName;
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }

  getBalance(): number {
    return this.balance;
  }

  getTransactionHistory(): Transaction[] {
    return this.transactions;
  }
}
