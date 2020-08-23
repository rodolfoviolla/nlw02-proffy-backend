import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import convertHourToMinutes from '../utils/convertHourToMinutes';

import CreateClassService from '../services/CreateClassService';
import ListClassesService from '../services/ListClassesService';

interface QueryFilters {
  week_day: string;
  subject: string;
  time: string;
}

export default class ClassesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const filters = request.query as unknown;

    const { week_day, subject, time } = filters as QueryFilters;

    if (!week_day || !subject || !time) {
      return response.status(400).json({
        error: 'Missing filter to search classes',
      });
    }

    const timeInMinutes = convertHourToMinutes(time);

    const listClasses = new ListClassesService();

    const classes = await listClasses.execute({
      week_day: Number(week_day),
      subject,
      time: timeInMinutes,
    });

    return response.json(classToClass(classes));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { subject, cost, class_schedule } = request.body;

    const createClass = new CreateClassService();

    const newClass = await createClass.execute({
      subject,
      cost,
      user_id,
      class_schedule,
    });

    return response.json(newClass);
  }
}
