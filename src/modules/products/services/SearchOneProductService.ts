import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequestProduct {
  id: string;
}

class SearchOneProductService {
  async execute({ id }: IRequestProduct): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);

    const productExists = await productRepository.findOne(id);

    if (!productExists) {
      throw new AppError('Produto não econtrado');
    }

    return productExists;
  }
}

export { SearchOneProductService };
