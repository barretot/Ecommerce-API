import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productRepository = await getCustomRepository(ProductRepository);

    const products = await productRepository.find();

    if (!products) {
      throw new AppError('Produto não econtrado');
    }

    return products;
  }
}

export { ListProductService };
