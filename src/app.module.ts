import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/profile';
import { Room } from './typeorm/entities/Room';
import { RoomsModule } from './rooms/rooms.module';
import { Role } from './typeorm/entities/Role';
import { Booking } from './typeorm/entities/Booking';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password:'12345678',
      database:'meetbookbe1',
      entities:[User,Profile,Room,Booking,Role],
      synchronize:true,
    }),
    UsersModule,
    RoomsModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
