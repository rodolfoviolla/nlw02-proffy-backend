import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, avatar, whatsapp, bio } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, avatar, whatsapp, bio });

    return response.json(user);
  }
}
