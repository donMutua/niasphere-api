import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  //TODO: Move to env variables
  url: 'postgresql://niasphere_owner:EW7kQFGcNl2S@ep-hidden-resonance-a18qfkb2.ap-southeast-1.aws.neon.tech/niasphere?sslmode=require',
  type: 'postgres',
  port: 3386,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
