import { Request, Response } from 'express';
import { CreateProductService } from '../services/CreateProductService';

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      price,
      quantity,
    });

    return response.status(201).json({
      message: 'Product created',
      product,
    });
  }
}

const createProductController = new CreateProductController();

export { createProductController };
