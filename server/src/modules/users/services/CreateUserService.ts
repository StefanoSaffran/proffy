import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    avatar,
    whatsapp,
    bio,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByWhatsapp(whatsapp);

    if (checkUserExists) throw new AppError('User already exists');

    const user = await this.usersRepository.create({
      name,
      avatar,
      whatsapp,
      bio,
    });

    return user;
  }
}

export default CreateUserService;
