import { injectable, inject } from 'tsyringe';

import Connection from '../infra/typeorm/entities/Connection';
import IConnectionsRepository from '../repositories/IConnectionsRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class CreateConnectionService {
  constructor(
    @inject('ConnectionsRepository')
    private connectionsRepository: IConnectionsRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Connection> {
    const newClass = await this.connectionsRepository.create(user_id);

    return newClass;
  }
}

export default CreateConnectionService;
