import { IsEmail, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsUrl()
  @IsString()
  @IsOptional()
  avatarUrl?: string;

  @IsString()
  password: string;
}
