import { getRepository } from 'typeorm';

import Class from '../entities/Class';

interface IRequest {
  subject: string;
  cost: number;
  user_id: string;
}

export default class CreateClassService {
  public async execute({ subject, cost, user_id }: IRequest): Promise<Class> {
    const classesRepository = getRepository(Class);

    const newClass = classesRepository.create({
      subject,
      cost,
      user_id,
    });

    await classesRepository.save(newClass);

    return newClass;
  }
}
