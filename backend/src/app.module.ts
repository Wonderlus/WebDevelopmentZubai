import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { UserModule } from './app/user/user.module';
import { ProductModule } from './app/product/product.module';
import { ProductEntity } from './models/product.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),

    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: () => ({
        type: 'postgres',
        host: process.env.HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [UserEntity, ProductEntity],
        synchronize: true,
      }),
    }),
    UserModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
