import { expect, describe, it, jest } from '@jest/globals'
import { Response, Request } from 'express'
import { Bank } from '../model/Bank'
import { BankController } from './bank.controller'

describe('Banking API', () => {

  describe('POST /accounts', () => {
    test('creates a new account', async () => {
      const accountInfo = { owner: "Alice" } ;

      const mockCreateAccount = jest.spyOn(Bank.prototype, 'createAccount');
      const req = { method: "POST", body: accountInfo } as Request
      const res = {
          json: jest.fn(),
          status: jest.fn().mockReturnThis()
      } as unknown as Response
    
      const controller = new BankController();
      await controller.createAccountHandler(req, res);
      
      expect(mockCreateAccount).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({message: 'account created successfully'});
    });
  })


  describe('POST /accounts/:owner/deposit', () => {
    test('deposit to an owner"s account', async () => {
      const accountOwner = { owner: "Alice" } ;
      const depositAmount = { amount: 100 }

      const mockDepositAccount = jest.spyOn(Bank.prototype, 'deposit');
      const req = { method: "POST", params: accountOwner, body: depositAmount } as unknown as Request
      const res = {
          json: jest.fn(),
          status: jest.fn().mockReturnThis()
      } as unknown as Response
    
      const controller = new BankController();
      await controller.depositHandler(req, res);
      
      expect(mockDepositAccount).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({message: 'amount deposited successfully'});
    });
  })

  describe('POST /accounts/:owner/withdraw', () => {
    test('withdraw from an owner"s account', async () => {
      const accountOwner = { owner: "Alice" } ;
      const withdrawAmount = { amount: 500 }

      const mockWithdrawMethod = jest.spyOn(Bank.prototype, 'withdraw');
      const req = { method: "POST", params: accountOwner, body: withdrawAmount } as unknown as Request
      const res = {
          json: jest.fn(),
          status: jest.fn().mockReturnThis()
      } as unknown as Response
    
      const controller = new BankController();
      await controller.withdrawHandler(req, res);
      
      expect(mockWithdrawMethod).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({message: 'amount withdrawn successfully'});
    });
  })

  describe('GET /accounts/:owner/transactions', () => {
    test('list the 5 most recent transactions of an owner"s account', async () => {
      const accountOwner = { owner: "Alice" } ;

      const mockListTransactionsMethod = jest.spyOn(Bank.prototype, 'listTransactions');
      const req = { method: "GET", params: accountOwner } as unknown as Request
      const res = {
          json: jest.fn(),
          status: jest.fn().mockReturnThis()
      } as unknown as Response
    
      const controller = new BankController();
      await controller.transactionsHandler(req, res);
      
      expect(mockListTransactionsMethod).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({message: 'transactions retrieved successfully'});
    });
  })

  describe('GET /accounts/:owner/balance', () => {
    test('get the balance of an owner"s account', async () => {
      const accountOwner = { owner: "Alice" } ;

      const mockGetBalanceMethod = jest.spyOn(Bank.prototype, 'getBalance');
      const req = { method: "GET", params: accountOwner } as unknown as Request
      const res = {
          json: jest.fn(),
          status: jest.fn().mockReturnThis()
      } as unknown as Response
    
      const controller = new BankController();
      await controller.balanceHandler(req, res);
      
      expect(mockGetBalanceMethod).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({message: 'balance retrieved successfully'});
    });
  })

  describe('GET /accounts/high-value', () => {
    test('get accounts whose balance is greater than a pre-set threshold', async () => {

      const mockListHighValueMethod = jest.spyOn(Bank.prototype, 'listHighValueCustomers');
      const req = { method: "GET" } as unknown as Request
      const res = {
          json: jest.fn(),
          status: jest.fn().mockReturnThis()
      } as unknown as Response
    
      const controller = new BankController();
      await controller.highvalueHandler(req, res);
      
      expect(mockListHighValueMethod).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({message: 'high value accounts retrieved successfully'});
    });
  })


})
