import { AppError } from '@shared/errors/AppError';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  async findByName(name: string): Promise<User | undefined> {
    const findUser = await this.findOne({
      where: { name },
    });

    return findUser;
  }

  async findById(id: string): Promise<User | undefined> {
    const findUser = await this.findOne({
      where: { id },
    });

    return findUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.findOne({
      where: { email },
    });

    return findUser;
  }
}

export { UserRepository };
