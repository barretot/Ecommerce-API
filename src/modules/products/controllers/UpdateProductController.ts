import { Request, Response } from 'express';
import { UpdateProductService } from '../services/UpdateProductService';

class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const { id } = request.params;

    const updateProductService = new UpdateProductService();

    const product = await updateProductService.execute({
      id,
      name,
      price,
      quantity,
    });

    return response.status(201).json({
      message: 'Product updated',
      product,
    });
  }
}

const updateProductController = new UpdateProductController();

export { updateProductController };
