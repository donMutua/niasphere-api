import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

export enum FarmingExperienceLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert',
}

export enum FarmGoal {
  Personal = 'Subsistence Farming',
  Commercial = 'Commercial Farming',
}
export enum FarmSizeUnit {
  ACRES = 'Acres',
  HECTARES = 'Hectares',
}

@Entity()
export class AboutMe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({
    type: 'enum',
    enum: FarmingExperienceLevel,
    nullable: true,
  })
  farmingExperienceLevel?: FarmingExperienceLevel;

  @Column({ nullable: true })
  city?: string;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  farmSize?: number;

  @Column({
    type: 'enum',
    enum: FarmSizeUnit,
    nullable: true,
  })
  farmSizeUnit?: FarmSizeUnit;

  @Column('simple-array', { nullable: true })
  cropsOfInterest?: string[]; // e.g., ['Tomatoes', 'Maize', 'Beans']

  @Column({
    type: 'enum',
    enum: FarmGoal,
    nullable: true,
  })
  farmGoal?: FarmGoal;

  @OneToOne(() => User, (user) => user.aboutMe)
  user: User;
}
