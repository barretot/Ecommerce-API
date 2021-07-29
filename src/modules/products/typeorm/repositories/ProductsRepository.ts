import { AppError } from '@shared/errors/AppError';
import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
  public async findByName(name: string): Promise<Product | undefined> {
    const findProduct = this.findOne({
      where: { name },
    });

    if (!findProduct) {
      throw new AppError('Não encontrado', 400);
    }

    return findProduct;
  }
}

export { ProductRepository };
