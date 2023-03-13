import { expect, describe, it, jest } from '@jest/globals'
import { Response, Request } from 'express'
import { Bank } from '../model';
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
      expect(res.json).toHaveBeenCalledWith({message: 'account created'});
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
      expect(res.json).toHaveBeenCalledWith({message: 'amount deposited'});
    });
  })




})
