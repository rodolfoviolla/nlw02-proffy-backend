import { Request, Response } from 'express';

import CreateClassService from '../services/CreateClassService';

export default class ClassController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { subject, cost, user_id } = request.body;

    const createClass = new CreateClassService();

    const newClass = await createClass.execute({ subject, cost, user_id });

    return response.json(newClass);
  }
}
