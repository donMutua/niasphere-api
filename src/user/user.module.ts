import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { AboutMe } from 'src/entities/aboutMe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, AboutMe])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
