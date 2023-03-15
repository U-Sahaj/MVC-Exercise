import { model, Schema } from 'mongoose'
import { ITransaction } from '../model/Bank'

export const transactionSchema: Schema = new Schema({
    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    amount: {
        type: Number,
        required: true
    }

}, { timestamps: true })


export default model<ITransaction>('Transaction', transactionSchema)