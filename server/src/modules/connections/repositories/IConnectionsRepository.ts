import Connection from '../infra/typeorm/entities/Connection';

export default interface IItemsRepository {
  create(user_id: string): Promise<Connection>;
  findAll(): Promise<[Connection[], number]>;
}
