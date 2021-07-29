import { createProductController } from '@modules/products/controllers/CreateProductController';
import { deleteProductController } from '@modules/products/controllers/DeleteProductController';
import { listProductController } from '@modules/products/controllers/ListProductController';
import { searchOneProductController } from '@modules/products/controllers/SearchOneProductController';
import { updateProductController } from '@modules/products/controllers/UpdateProductController';
import { Router } from 'express';

const routes = Router();

routes.post('/product', createProductController.handle);

routes.get('/products', listProductController.handle);

routes.get('/product/:id', searchOneProductController.handle);

routes.put('/product/:id', updateProductController.handle);

routes.delete('/product/:id', deleteProductController.handle);

export { routes };
