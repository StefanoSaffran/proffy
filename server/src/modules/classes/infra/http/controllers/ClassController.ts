import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import CreateClassService from '@modules/classes/services/CreateClassService';
import ListClassesService from '@modules/classes/services/ListClassesService';
import CreateClassScheduleService from '@modules/classes/services/CreateClassScheduleService';
import AppError from '@shared/errors/AppError';

export default class ClassController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

    const createUser = container.resolve(CreateUserService);
    const createClass = container.resolve(CreateClassService);
    const createClassSchedule = container.resolve(CreateClassScheduleService);

    const user = await createUser.execute({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const newClass = await createClass.execute({
      subject,
      cost,
      user_id: user.id,
    });

    await createClassSchedule.execute({
      class_id: newClass.id,
      schedule,
    });

    return response.status(201).send();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { week_day, subject, time } = request.query;

    if (!week_day?.length || !subject || !time)
      throw new AppError('Missing filters to search classes');

    const listClasses = container.resolve(ListClassesService);

    const classes = await listClasses.execute({
      week_day: Number(week_day),
      subject: String(subject),
      time: String(time),
    });

    return response.json(classes);
  }
}
