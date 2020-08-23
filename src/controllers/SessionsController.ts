import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import AuthenticateUserService from '../services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token, expiresIn } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ user: classToClass(user), token, expiresIn });
  }
}
