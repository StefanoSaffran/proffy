import { injectable, inject } from 'tsyringe';

import Connection from '../infra/typeorm/entities/Connection';
import IConnectionsRepository from '../repositories/IConnectionsRepository';

@injectable()
class ListConnectionsService {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ) {}

  public async execute(): Promise<[Connection[], number]> {
    const connections = await this.connectionsRepository.findAll();

    return connections;
  }
}

export default ListConnectionsService;
