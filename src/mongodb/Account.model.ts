import mongoose, { Document, Schema } from 'mongoose';
import { AccountDocument } from './AccountDocument';

const accountSchema = new Schema<AccountDocument>({
  owner: { type: String, required: true },
  balance: { type: Number, required: true },
  transactions: [{
    description: { type: String, required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
  }]
});

const AccountModel = mongoose.model<AccountDocument>('Account', accountSchema);

export { AccountModel };
