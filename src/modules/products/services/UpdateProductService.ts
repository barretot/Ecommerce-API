import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequestProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

class UpdateProductService {
  async execute({
    id,
    name,
    price,
    quantity,
  }: IRequestProduct): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);

    const updateProductById = await productRepository.findOne(id);

    if (!updateProductById) {
      throw new AppError('Produto não encontrado');
    }

    const productExistsByName = await productRepository.findByName(name);

    if (productExistsByName) {
      throw new AppError('Produto com esse nome já encontrado');
    }

    updateProductById.name = name;
    updateProductById.price = price;
    updateProductById.quantity = quantity;

    await productRepository.save(updateProductById);

    return updateProductById;
  }
}

export { UpdateProductService };
