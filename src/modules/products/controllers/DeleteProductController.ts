import { Request, Response } from 'express';
import { DeleteProductService } from '../services/DeleteProductService';

class DeleteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const updateProductService = new DeleteProductService();

    const product = await updateProductService.execute({
      id,
    });

    return response.status(201).json({
      message: 'Product deleted',
      product,
    });
  }
}

const deleteProductController = new DeleteProductController();

export { deleteProductController };
