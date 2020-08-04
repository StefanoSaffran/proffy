import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import convertHourToMinutes from '@shared/utils/convertHourToMinutes';

import Class from '../infra/typeorm/entities/Class';
import IClassRepository from '../repositories/IClassRepository';

interface IRequest {
  week_day: number;
  subject: string;
  time: string;
}

@injectable()
class ListClassesService {
  constructor(
    @inject('ClassRepository')
    private classRepository: IClassRepository,
  ) {}

  public async execute({ week_day, subject, time }: IRequest): Promise<Class> {
    const timeInMinutes = convertHourToMinutes(time);

    const data = this.classRepository.findAllFilteredClasses({
      week_day,
      subject,
      time: timeInMinutes,
    });
    /* const userClasses = await this.classRepository.findByUserID(user_id);

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
    }); */

    return data;
  }
}

export default ListClassesService;
