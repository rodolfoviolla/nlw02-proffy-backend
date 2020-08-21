import { getRepository } from 'typeorm';

import Class from '../entities/Class';
import ClassSchedule from '../entities/ClassSchedule';

interface IRequest {
  subject: string;
  cost: number;
  user_id: string;
  class_schedule: ClassSchedule[];
}

export default class CreateClassService {
  public async execute({
    subject,
    cost,
    user_id,
    class_schedule,
  }: IRequest): Promise<Class> {
    const classesRepository = getRepository(Class);

    const newClass = classesRepository.create({
      subject,
      cost,
      user_id,
      class_schedule,
    });

    await classesRepository.save(newClass);

    return newClass;
  }
}
