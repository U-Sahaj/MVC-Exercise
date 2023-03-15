import request from 'supertest';
import express from 'express';
import { Bank } from '../model/Bank';

describe('Bank API', () => {
  let app: express.Express;
  let bank: Bank;

  beforeEach(() => {
    bank = new Bank();
    app = express();
    app.use(express.json());
    app.post('/accounts', (req, res) => {
      const { owner } = req.body;
      bank.createAccount(owner);
      res.send(`Account created for ${owner}.`);
    });
  });

  it('should create a new account', async () => {
    jest.spyOn(bank, 'createAccount');
    const response = await request(app)
      .post('/accounts')
      .send({ owner: 'John Doe' })
      .expect(200);
    expect(response.text).toEqual('Account created for John Doe.');
    expect(bank.createAccount).toHaveBeenCalledWith('John Doe');
  });

});
