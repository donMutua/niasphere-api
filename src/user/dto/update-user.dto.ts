import { PartialType } from '@nestjs/mapped-types';
import {
  IsOptional,
  IsString,
  IsEnum,
  IsArray,
  IsNumber,
  IsDecimal,
} from 'class-validator';
import {
  FarmingExperienceLevel,
  FarmGoal,
  FarmSizeUnit,
} from '../../entities/aboutMe.entity';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsEnum(FarmingExperienceLevel)
  farmingExperienceLevel?: FarmingExperienceLevel;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsNumber()
  @IsDecimal({ decimal_digits: '2', force_decimal: true }) // Ensure decimal precision
  farmSize?: number;

  @IsOptional()
  @IsEnum(FarmSizeUnit)
  farmSizeUnit?: FarmSizeUnit;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  cropsOfInterest?: string[];

  @IsOptional()
  @IsEnum(FarmGoal)
  farmGoal?: FarmGoal;
}

export class UpdateUserProfileDto {
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsEnum(FarmingExperienceLevel)
  farmingExperienceLevel?: FarmingExperienceLevel;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsNumber()
  @IsDecimal({ decimal_digits: '2', force_decimal: true })
  farmSize?: number;

  @IsOptional()
  @IsEnum(FarmSizeUnit)
  farmSizeUnit?: FarmSizeUnit;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  cropsOfInterest?: string[];

  @IsOptional()
  @IsEnum(FarmGoal)
  farmGoal?: FarmGoal;
}
