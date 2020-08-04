import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IClassRepository from '@modules/classes/repositories/IClassRepository';
import ClassRepository from '@modules/classes/infra/typeorm/repositories/ClassRepository';

import IClassScheduleRepository from '@modules/classes/repositories/IClassScheduleRepository';
import ClassScheduleRepository from '@modules/classes/infra/typeorm/repositories/ClassScheduleRepository';

import IConnectionsRepository from '@modules/connections/repositories/IConnectionsRepository';
import ConnectionsRepository from '@modules/connections/infra/typeorm/repositories/ConnectionsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IClassRepository>(
  'ClassRepository',
  ClassRepository,
);

container.registerSingleton<IClassScheduleRepository>(
  'ClassScheduleRepository',
  ClassScheduleRepository,
);

container.registerSingleton<IConnectionsRepository>(
  'ConnectionsRepository',
  ConnectionsRepository,
);
