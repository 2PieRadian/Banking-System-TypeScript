import { Account } from "./account";
import { CurrentAccount } from "./current-account";
import { FixedDepositAccount } from "./fixed-deposit-account";
import { SavingsAccount } from "./savings-acount";

export class Bank {
  private accounts: Map<string, Account>;
  constructor() {
    this.accounts = new Map<string, Account>();
  }

  createAccount(
    accountHolderName: string,
    accountType: string,
    years: number
  ): Account {
    let account: Account;

    switch (accountType) {
      case "SAVINGS":
        account = new SavingsAccount(accountHolderName);
        break;
      case "CURRENT":
        account = new CurrentAccount(accountHolderName);
        break;
      case "FIXED_DEPOSIT":
        account = new FixedDepositAccount(accountHolderName, years);
        break;
      default:
        throw new Error("Invalid account type.");
    }

    this.accounts.set(account.getAccountNumber(), account);
    return account;
  }
}
