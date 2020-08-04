import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    name,
    avatar,
    whatsapp,
    bio,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      avatar,
      whatsapp,
      bio,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne(id);

    return findUser;
  }

  public async findByWhatsapp(whatsapp: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: {
        whatsapp,
      },
    });

    return findUser;
  }
}

export default UsersRepository;
