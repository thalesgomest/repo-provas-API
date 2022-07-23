import express, { json } from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routers/index.js';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(json());
app.use(cors());
app.use(router);

export default app;
