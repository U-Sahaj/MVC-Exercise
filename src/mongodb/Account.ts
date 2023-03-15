import { model, Schema } from 'mongoose'
import { IAccount } from '../model/Bank'
import { transactionSchema } from './Transaction'

const accountSchema: Schema = new Schema({
    owner: {
        type: String,
        required: true
    },

    balance: {
        type: Number,
        required: true
    },

    transactions: {
        type: [ transactionSchema ],
        required: true
    }

}, { timestamps: true })


export default model<IAccount>('Account', transactionSchema)