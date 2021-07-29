import { Request, Response } from 'express';
import { SearchOneProductService } from '../services/SearchOneProductService';

class SearchOneProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const searchProductService = new SearchOneProductService();

    const { id } = request.params;

    const product = await searchProductService.execute({ id });

    return response.status(200).json({
      product,
    });
  }
}

const searchOneProductController = new SearchOneProductController();

export { searchOneProductController };
