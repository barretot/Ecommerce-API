import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, avatar } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password,
      avatar,
    });

    return response.status(201).json({
      message: 'User created',
      user,
    });
  }
}

const createUserController = new CreateUserController();

export { createUserController };
