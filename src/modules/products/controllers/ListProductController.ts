import { Request, Response } from 'express';
import { ListProductService } from '../services/ListProductSercice';

class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductService = new ListProductService();

    const products = await listProductService.execute();

    return response.status(200).json({
      products,
    });
  }
}

const listProductController = new ListProductsController();

export { listProductController };
