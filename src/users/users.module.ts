import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './service/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Profile } from 'src/typeorm/entities/profile';

@Module({
  imports:[TypeOrmModule.forFeature([User,Profile ])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
