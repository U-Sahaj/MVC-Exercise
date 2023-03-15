import * as mongoDB from "mongodb"

import bodyParser from "body-parser";
import express, { Express, Router } from 'express';
import bankingServiceRouter from './router/BankingServiceRouter';
import mongoose from "mongoose";

export const app : Express = express()


const PORT: string | number = process.env.PORT || 3000
const MONGO_USER: string | number = process.env.MONGO_USER || "bankuser"
const MONGO_PASSWORD: string | number = process.env.MONGO_PASSWORD || "bankuser"
const MONGO_DB: string | number = process.env.MONGO_DB || "bank"


app.use(bodyParser.json());

app.use('/bank', bankingServiceRouter);

app.get('/testRoute', (req, res) => res.end('Hello from Server!'))

const uri: string = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@localhost:27017/${MONGO_DB}?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() =>
      app.listen(PORT, () =>
          console.log(`Server running on http://localhost:${PORT}`)
      )
  )
  .catch((error) => {
      throw error
  })
