import { createUserController } from '../controllers/CreateUserController';

import { Router } from 'express';

const userRouter = Router();

userRouter.post('/user', createUserController.handle);

export { userRouter };
