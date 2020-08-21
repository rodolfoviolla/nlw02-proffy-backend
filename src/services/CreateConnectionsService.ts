import { getRepository } from 'typeorm';

import Connection from '../entities/Connection';

class CreateConnectionsService {
  public async execute(user_id: string): Promise<Connection> {
    const connectionsRepository = getRepository(Connection);

    const connection = connectionsRepository.create({ user_id });

    await connectionsRepository.save(connection);

    return connection;
  }
}

export default CreateConnectionsService;
