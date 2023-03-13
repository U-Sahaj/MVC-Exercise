
import bodyParser from "body-parser";
import express, { Express, Router } from 'express';
import bankingServiceRouter from './router/BankingServiceRouter';

export const app : Express = express()
const port = 3000;

app.use(bodyParser.json());

app.use('/bank', bankingServiceRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});