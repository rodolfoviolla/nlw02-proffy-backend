import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateUserService from '../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      firstname,
      lastname,
      email,
      password,
      avatar,
      whatsapp,
      bio,
    } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      firstname,
      lastname,
      email,
      password,
      avatar,
      whatsapp,
      bio,
    });

    return response.json(classToClass(user));
  }
}
