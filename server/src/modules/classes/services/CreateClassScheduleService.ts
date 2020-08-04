import { injectable, inject } from 'tsyringe';

import ClassSchedule from '../infra/typeorm/entities/ClassSchedule';
import IClassScheduleRepository from '../repositories/IClassScheduleRepository';

interface IRequest {
  schedule: Array<{
    week_day: number;
    from: string;
    to: string;
  }>;
  class_id: string;
}

@injectable()
class CreateClassScheduleService {
  constructor(
    @inject('ClassScheduleRepository')
    private classScheduleRepository: IClassScheduleRepository,
  ) {}

  public async execute({
    schedule,
    class_id,
  }: IRequest): Promise<ClassSchedule[]> {
    const classSchedule = await this.classScheduleRepository.create({
      schedule,
      class_id,
    });

    return classSchedule;
  }
}

export default CreateClassScheduleService;
