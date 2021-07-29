import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequestProduct {
  id: string;
}

class DeleteProductService {
  async execute({ id }: IRequestProduct): Promise<void> {
    const productRepository = getCustomRepository(ProductRepository);

    const deleteProductById = await productRepository.findOne(id);

    if (!deleteProductById) {
      throw new AppError('Produto não econtrado');
    }

    await productRepository.remove(deleteProductById);
  }
}

export { DeleteProductService };
