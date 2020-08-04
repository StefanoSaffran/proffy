import { getRepository, Repository, getConnection } from 'typeorm';

import IClassRepository from '@modules/classes/repositories/IClassRepository';
import ICreateClassDTO from '@modules/classes/dtos/ICreateClassDTO';
import IFindAllFilteredClassesDTO from '@modules/classes/dtos/IFindAllFilteredClassesDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import Class from '../entities/Class';

class ClassRepository implements IClassRepository {
  private ormRepository: Repository<Class>;

  constructor() {
    this.ormRepository = getRepository(Class);
  }

  public async create({
    subject,
    cost,
    user_id,
  }: ICreateClassDTO): Promise<Class> {
    const createdClass = this.ormRepository.create({
      subject,
      cost,
      user_id,
    });

    await this.ormRepository.save(createdClass);

    return createdClass;
  }

  public async findByUserID(user_id: string): Promise<Class[] | undefined> {
    const userClasses = await this.ormRepository.find({
      where: {
        user_id,
      },
    });

    return userClasses;
  }

  public async findAllFilteredClasses({
    week_day,
    subject,
    time,
  }: IFindAllFilteredClassesDTO): Promise<Class[] | undefined> {
    const classes = await getConnection()
      .getRepository(Class)
      .createQueryBuilder('classes')
      .innerJoin('classes.classSchedule', 'cs')
      .innerJoinAndSelect('classes.user', 'user', 'classes.user_id = user.id')
      .where('cs.class_id = classes.id')
      .andWhere('cs.week_day = :week_day', { week_day })
      .andWhere('cs.from <= :time', { time })
      .andWhere('cs.to > :time', { time })
      .andWhere('classes.subject = :subject', { subject })
      .getMany();

    /* With knex

     .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [week_day])
      })
      .where('classes.subject', '=', 'users.id')
      .join('users', 'classes.user_id', '=', 'users.id')
      .selec(['classes.*', 'users.*']) */

    return classes;
  }
}

export default ClassRepository;
