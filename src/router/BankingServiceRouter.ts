import express, { Request, Response } from 'express';
import { Bank } from '../model';
import {BankController} from '../controller/bank.controller'

const bankingServiceRouter = express.Router();
const controller = new BankController();

bankingServiceRouter.post('/accounts', controller.createAccountHandler);

bankingServiceRouter.post('/accounts/:owner/deposit', controller.depositHandler);

bankingServiceRouter.post('/accounts/:owner/withdraw', (req: Request, res: Response) => {
  const { owner } = req.params;
  const { amount } = req.body;
  bank.withdraw(owner, amount);
  res.sendStatus(200);
});

bankingServiceRouter.get('/accounts/:owner/transactions', (req: Request, res: Response) => {
  const { owner } = req.params;
  bank.listTransactions(owner);
  res.sendStatus(200);
});

bankingServiceRouter.get('/accounts/:owner/balance', (req: Request, res: Response) => {
  const { owner } = req.params;
  bank.getBalance(owner);
  res.sendStatus(200);
});

bankingServiceRouter.get('/accounts/high-value', (req: Request, res: Response) => {
  bank.listHighValueCustomers();
  res.sendStatus(200);
});

export default bankingServiceRouter;