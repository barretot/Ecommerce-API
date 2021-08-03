import { createProductController } from '../controllers/CreateProductController';
import { deleteProductController } from '../controllers/DeleteProductController';
import { listProductController } from '../controllers/ListProductController';
import { searchOneProductController } from '../controllers/SearchOneProductController';
import { updateProductController } from '../controllers/UpdateProductController';

import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/products', listProductController.handle);

productsRouter.get(
  '/product/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  searchOneProductController.handle,
);

productsRouter.post(
  '/product',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
    },
  }),
  createProductController.handle,
);

productsRouter.put(
  '/product/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required().min(2),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required(),
    },
  }),
  updateProductController.handle,
);

productsRouter.delete(
  '/product/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  deleteProductController.handle,
);

export { productsRouter };
