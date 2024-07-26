import { Module } from '@nestjs/common';
import { RoomsController } from './controllers/rooms/rooms.controller';
import { RoomsService } from './service/rooms/rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/typeorm/entities/Room';
import { Booking } from 'src/typeorm/entities/Booking';
import { RoomGateway } from './room.gateway';

@Module({
  imports:[TypeOrmModule.forFeature([Room,Booking])],
  controllers: [RoomsController],
  providers: [RoomsService,RoomGateway],
  exports:[RoomsService]
})
export class RoomsModule {}
