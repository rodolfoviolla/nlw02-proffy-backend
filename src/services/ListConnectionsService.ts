import { getRepository } from 'typeorm';

import Connection from '../entities/Connection';

class ListConnectionsService {
  public async execute(): Promise<[Connection[], number]> {
    const connectionsRepository = getRepository(Connection);

    const connections = await connectionsRepository.findAndCount();

    return connections;
  }
}

export default ListConnectionsService;
