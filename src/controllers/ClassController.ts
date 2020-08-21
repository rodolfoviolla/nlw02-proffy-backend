import { Request, Response } from 'express';

import convertHourToMinutes from '../utils/convertHourToMinutes';

import CreateClassService from '../services/CreateClassService';
import ListClassesService from '../services/ListClassesService';

interface QueryFilters {
  week_day: string;
  subject: string;
  time: string;
}

export default class ClassController {
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

    return response.json(classes);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { subject, cost, user_id, class_schedule } = request.body;

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
