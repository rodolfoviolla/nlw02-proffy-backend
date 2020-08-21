import { getRepository } from 'typeorm';

import Class from '../entities/Class';

interface IRequest {
  week_day: number;
  subject: string;
  time: number;
}

class ListClassesService {
  public async execute({
    week_day,
    subject,
    time,
  }: IRequest): Promise<Class[] | undefined> {
    const classRepository = getRepository(Class);

    const findClass = await classRepository
      .createQueryBuilder('classes')
      .leftJoinAndSelect('classes.user', 'user')
      .leftJoinAndSelect('classes.class_schedule', 'class_schedule')
      .where('classes.subject = :subject', { subject })
      .andWhere('class_schedule.week_day = :week_day', { week_day })
      .andWhere('class_schedule.from <= :time', { time })
      .andWhere('class_schedule.to > :time', { time })
      .getMany();

    return findClass;
  }
}

export default ListClassesService;
