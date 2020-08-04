import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateConnectionService from '@modules/connections/services/CreateConnectionService';
import ListConnectionsService from '@modules/connections/services/ListConnectionsService';
// import AppError from '@shared/errors/AppError';

export default class ConnectionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    const createConnection = container.resolve(CreateConnectionService);

    await createConnection.execute({
      user_id,
    });

    return response.status(201).send();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listConnection = container.resolve(ListConnectionsService);

    const connections = await listConnection.execute();

    return response.json(connections[1]);
  }
}
