import { getRepository, Repository } from 'typeorm';

import IConnectionsRepository from '@modules/connections/repositories/IConnectionsRepository';
import Connection from '../entities/Connection';

class ConnectionsRepository implements IConnectionsRepository {
  private ormRepository: Repository<Connection>;

  constructor() {
    this.ormRepository = getRepository(Connection);
  }

  public async create(user_id: string): Promise<Connection> {
    const connection = this.ormRepository.create({
      user_id,
    });

    await this.ormRepository.save(connection);

    return connection;
  }

  public async findAll(): Promise<[Connection[], number]> {
    return this.ormRepository.findAndCount();
  }
}

export default ConnectionsRepository;
