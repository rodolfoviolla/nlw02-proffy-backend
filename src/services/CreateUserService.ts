import { getRepository } from 'typeorm';

import BCryptProvider from '../providers/BCryptProvider';

import User from '../entities/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    avatar,
    whatsapp,
    bio,
  }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const hashProvider = new BCryptProvider();

    const hashedPassword = await hashProvider.generateHash(password);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      avatar,
      whatsapp,
      bio,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
