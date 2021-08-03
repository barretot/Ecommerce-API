import { productsRouter } from '@modules/products/routes/products.routes';
import { userRouter } from '@modules/users/routes/user.routes';
import { Router } from 'express';

const routes = Router();

routes.use(productsRouter);
routes.use(userRouter);

export { routes };
