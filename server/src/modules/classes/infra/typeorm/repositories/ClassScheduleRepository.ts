import { getRepository, Repository } from 'typeorm';

import IClassScheduleRepository from '@modules/classes/repositories/IClassScheduleRepository';
import ICreateClassScheduleDTO from '@modules/classes/dtos/ICreateClassScheduleDTO';
import convertHourToMinutes from '@shared/utils/convertHourToMinutes';
import ClassSchedule from '../entities/ClassSchedule';

class ClassScheduleRepository implements IClassScheduleRepository {
  private ormRepository: Repository<ClassSchedule>;

  constructor() {
    this.ormRepository = getRepository(ClassSchedule);
  }

  public async create({
    schedule,
    class_id,
  }: ICreateClassScheduleDTO): Promise<ClassSchedule[]> {
    const storedClassSchedule: ClassSchedule[] = [];

    for (const scheduleItem of schedule) {
      const { week_day, from, to } = scheduleItem;

      const createdClass = this.ormRepository.create({
        class_id,
        week_day,
        from: convertHourToMinutes(from),
        to: convertHourToMinutes(to),
      });

      await this.ormRepository.save(createdClass);
      storedClassSchedule.push(createdClass);
    }

    return storedClassSchedule;
  }

  /*   public async findByUserID(user_id: string): Promise<ClassSchedule[] | undefined> {
    const userClasses = await this.ormRepository.find({
      where: {
        user_id,
      },
    });

    return userClasses;
  } */

  /* public async findByPointId(id: string): Promise<Class[] | undefined> {
    const items = this.ormRepository
      .createQueryBuilder('items')
      .select('items.title')
      .innerJoin('items.point_items', 'point_items')
      .where('point_items.point_id = :id', { id })
      .getMany();

    return items;
  }

  public async findAllItems(): Promise<Class[] | undefined> {
    const items = await this.ormRepository.find();

    return items;
  }

  public async findAllById(items: Array<string>): Promise<Class[]> {
    const findAllItems = await this.ormRepository.find({
      id: In(items),
    });

    return findAllItems;
  } */
}

export default ClassScheduleRepository;
