import { Response, Request } from 'express'
import { Bank } from '../model';

const bank = new Bank()

export class BankController {

  createAccountHandler = async (req: Request, res: Response): Promise<void> => {
    console.log('accounts', req.body)
    const owner = req.body.owner;
    bank.createAccount(owner);
    res.status(201).json({message: 'account created'});
  }

  depositHandler = async (req: Request, res: Response): Promise<void> => {
    const owner = req.params.owner;
    const amount = req.body.amount;
    bank.deposit(owner, amount);
    res.status(200).json({message: 'amount deposited'});
  }




}

