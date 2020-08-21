import { Request, Response } from 'express';

import CreateConnectionsService from '../services/CreateConnectionsService';
import ListConnectionsService from '../services/ListConnectionsService';

export default class ConnectionsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listConnections = new ListConnectionsService();

    const [, total] = await listConnections.execute();

    return response.json({ total });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const createConnections = new CreateConnectionsService();

    const connection = await createConnections.execute(user_id);

    return response.json(connection);
  }
}
