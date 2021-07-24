import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import { AppError } from '@shared/errors/AppError';
import { routes } from './routes';

import '@shared/typeorm';

import 'reflect-metadata';

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

// Error middleware
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server Error',
    });
  },
);

export { app };
