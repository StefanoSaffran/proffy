import Class from '../infra/typeorm/entities/Class';

import ICreateClassDTO from '../dtos/ICreateClassDTO';
import IFindAllFilteredClassesDTO from '../dtos/IFindAllFilteredClassesDTO';

export default interface IClassRepository {
  create(data: ICreateClassDTO): Promise<Class>;
  findByUserID(user_id: string): Promise<Class[] | undefined>;
  findAllFilteredClasses(
    data: IFindAllFilteredClassesDTO,
  ): Promise<Class[] | undefined>;
}
