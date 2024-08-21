import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { AboutMe } from 'src/entities/aboutMe.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
    @InjectRepository(AboutMe) private AboutMeRepo: Repository<AboutMe>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.UserRepository.create(createUserDto);
    const savedUser = await this.UserRepository.save(user);
    return {
      id: savedUser.id,
      email: savedUser.email,
    };
  }

  async findByEmail(email: string) {
    return await this.UserRepository.findOne({
      where: {
        email,
      },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return this.UserRepository.findOne({
      where: {
        id,
      },
      select: ['firstName', 'lastName', 'avatarUrl'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.UserRepository.findOne({
      where: {
        id,
      },
      relations: ['aboutMe'],
    });
    if (!user.aboutMe) {
      user.aboutMe = this.AboutMeRepo.create(updateUserDto);
    } else {
      this.AboutMeRepo.merge(user.aboutMe, updateUserDto);
    }

    await this.UserRepository.save(user);
    return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
