import express, { Request, Response } from 'express';
import {BankController} from '../controller/bank.controller'

const bankingServiceRouter = express.Router();
const controller = new BankController();

bankingServiceRouter.post('/accounts', controller.createAccountHandler);

bankingServiceRouter.post('/accounts/:owner/deposit', controller.depositHandler);

bankingServiceRouter.post('/accounts/:owner/withdraw', controller.withdrawHandler);

bankingServiceRouter.get('/accounts/:owner/transactions', controller.transactionsHandler);

bankingServiceRouter.get('/accounts/:owner/balance', controller.balanceHandler);

bankingServiceRouter.get('/accounts/high-value', controller.highvalueHandler);

export default bankingServiceRouter;