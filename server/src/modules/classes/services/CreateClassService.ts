import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Class from '../infra/typeorm/entities/Class';
import IClassRepository from '../repositories/IClassRepository';

interface IRequest {
  subject: string;
  cost: number;
  user_id: string;
}

@injectable()
class CreateClassService {
  constructor(
    @inject('ClassRepository')
    private classRepository: IClassRepository,
  ) {}

  public async execute({ subject, cost, user_id }: IRequest): Promise<Class> {
    const userClasses = await this.classRepository.findByUserID(user_id);

    if (userClasses) {
      const checkClassExists = userClasses.find(
        (classItem: Class) => classItem.subject === subject,
      );

      if (checkClassExists) throw new AppError('Class already exists');
    }

    const newClass = await this.classRepository.create({
      subject,
      cost,
      user_id,
    });

    return newClass;
  }
}

export default CreateClassService;
