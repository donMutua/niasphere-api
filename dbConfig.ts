import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  //TODO: Move to env variables
  url: '',
  type: 'postgres',
  port: 3386,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
