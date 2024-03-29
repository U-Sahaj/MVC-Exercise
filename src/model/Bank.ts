export interface ITransaction {
    description: string
    date: Date;
    amount: number;
}
  
export interface IAccount {
  owner: string;
  balance: number;
  transactions: ITransaction[]
}
  
export class Bank {
  private accounts: IAccount[]

  constructor() {
    this.accounts = []
  }

  createAccount(owner: string): void {
    const account: IAccount = {
      owner,
      balance: 0,
      transactions: []
    };
    this.accounts.push(account);
    console.log(`Account created for ${owner}.`)
  }

  getAccount(owner: string): IAccount | undefined {
    return this.accounts.find(account => account.owner === owner)
  }

  deposit(owner: string, amount: number): void {
    const account = this.getAccount(owner);
    if (!account) {
      console.log(`Account not found for ${owner}.`)
      return;
    }
    account.balance += amount;
    const transaction: ITransaction = {
      description: `Deposit`,
      date: new Date(),
      amount
    };
    account.transactions.push(transaction);
    console.log(`${amount} deposited to ${owner}'s account.`)
  }

  withdraw(owner: string, amount: number): void {
    const account = this.getAccount(owner);
    if (!account) {
      console.log(`Account not found for ${owner}.`)
      return;
    }
    if (amount > account.balance) {
      console.log(`Insufficient balance for ${owner}.`)
      return
    }
    account.balance -= amount;
    const transaction: ITransaction = {
      description: `Withdrawal`,
      date: new Date(),
      amount: -amount
    }
    account.transactions.push(transaction)
    console.log(`${amount} withdrawn from ${owner}'s account.`)
  }

  listTransactions(owner: string): ITransaction[] {
    const account = this.getAccount(owner);
    if (!account) {
      console.log(`Account not found for ${owner}.`);
      return;
    }
    console.log(`Owner is ${owner}`)
    const transactions = account.transactions
      .slice(-5)
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .map(transaction => ({
        description: transaction.description,
        date: transaction.date,
        amount: transaction.amount
      }))
    return transactions
  }

  getBalance(owner: string): number {
    const account = this.getAccount(owner);
    if (!account) {
      console.log(`Account not found for ${owner}.`);
      return;
    }
    console.log(`Balance for ${owner}: ${account.balance}`)
    return account.balance
  }

  listHighValueCustomers(): IAccount[] {
    const highValueCustomers = this.accounts
    .filter((account) => account.balance > 5000)
    .sort((a, b) => b.balance - a.balance)
    .map((account) => ({
      owner: account.owner,
      balance: account.balance,
      transactions: account.transactions
    }))
    return highValueCustomers
  }
}
