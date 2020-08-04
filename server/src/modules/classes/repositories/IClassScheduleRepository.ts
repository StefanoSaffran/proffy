import ClassSchedule from '../infra/typeorm/entities/ClassSchedule';

import ICreateClassScheduleDTO from '../dtos/ICreateClassScheduleDTO';

export default interface IClassScheduleRepository {
  create(data: ICreateClassScheduleDTO): Promise<ClassSchedule[]>;
}
