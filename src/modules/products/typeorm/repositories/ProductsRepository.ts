import { AppError } from '@shared/errors/AppError';
import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
  async findByName(name: string): Promise<Product | undefined> {
    const findProduct = await this.findOne({
      where: { name },
    });

    return findProduct;
  }
}

export { ProductRepository };
