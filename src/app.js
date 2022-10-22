// DOTENV IMPORT
import dotenv from 'dotenv';
// EXPRESS IMPORT
import express from 'express';
// IMPORT DATABASE
import './database';

// HOME ROUTER
import { resolve } from 'path';
import homeRouter from './routes/home';

// USER ROUTER
import userRouter from './routes/user';

// TOKEN ROUTER
import tokenRouter from './routes/token';

// ALUNO ROUTER
import alunoRouter from './routes/aluno';

// PIC ROUTER
import picRouter from './routes/pic';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users', userRouter);
    this.app.use('/tokens', tokenRouter);
    this.app.use('/alunos', alunoRouter);
    this.app.use('/pic', picRouter);
  }
}

export default new App().app;
