import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { User } from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/UsersRepository';

interface IRequestUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

class CreateUserService {
  async execute({
    name,
    email,
    password,
    avatar,
  }: IRequestUser): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const emailExists = await userRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email ja cadastrado');
    }

    const user = await userRepository.create({
      name,
      email,
      password,
      avatar,
    });

    await userRepository.save(user);

    return user;
  }
}

export { CreateUserService };
