import { getRepository } from 'typeorm';

import User from '../entities/User';

interface IRequest {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

class CreateUserService {
  public async execute({
    name,
    avatar,
    whatsapp,
    bio,
  }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const user = usersRepository.create({
      name,
      avatar,
      whatsapp,
      bio,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
