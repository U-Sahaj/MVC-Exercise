import { IAccount, ITransaction } from '../model/Bank';

export interface IBankRepository {
  createAccount(owner: string): Promise<IAccount>;
  deposit(ownerId: string, amount: number): Promise<ITransaction>;
  withdraw(ownerId: string, amount: number): Promise<ITransaction>;
  getBalance(ownerId: string): Promise<number>;
  listTransactions(ownerId: string): Promise<ITransaction[]>;
  listHighValueCustomers(): Promise<IAccount[]>;
}
