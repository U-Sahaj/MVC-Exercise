import { Response, Request } from 'express'
import { Bank } from '../model';

const bank = new Bank()

export class BankController {

  createAccountHandler = async (req: Request, res: Response): Promise<void> => {
    console.log('accounts', req.body)
    const owner = req.body.owner;
    bank.createAccount(owner);
    res.status(201).json({message: 'account created successfully'});
  }

  depositHandler = async (req: Request, res: Response): Promise<void> => {
    const owner = req.params.owner;
    const amount = req.body.amount;
    bank.deposit(owner, amount);
    res.status(200).json({message: 'amount deposited successfully'});
  }

  withdrawHandler = async (req: Request, res: Response): Promise<void> => {
    const { owner } = req.params;
    const { amount } = req.body;
    bank.withdraw(owner, amount);
    res.status(200).json({message: 'amount withdrawn successfully'});
  }
  
  transactionsHandler = async (req: Request, res: Response): Promise<void> => {
    const { owner } = req.params;
    bank.listTransactions(owner);
    res.status(200).json({message: 'transactions retrieved successfully'});
  }

  balanceHandler = async (req: Request, res: Response): Promise<void> => {
    const { owner } = req.params;
    bank.getBalance(owner);
    res.status(200).json({message: 'balance retrieved successfully'});
  }

  highvalueHandler = async (req: Request, res: Response): Promise<void> => {
    bank.listHighValueCustomers();
    res.status(200).json({message: 'high value accounts retrieved successfully'});
  }

}

