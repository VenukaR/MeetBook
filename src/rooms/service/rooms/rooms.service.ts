import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingDto } from 'src/rooms/dtos/booking.dto';
import { RoomGateway } from 'src/rooms/room.gateway';
import { CreateRoomParam, UpdateRoomParam } from 'src/rooms/utils/types';
import { Booking } from 'src/typeorm/entities/Booking';
import { Room } from 'src/typeorm/entities/Room';
import { LessThanOrEqual, MoreThan, Repository } from 'typeorm';

@Injectable()
export class RoomsService {

    constructor(@InjectRepository(Room)private roomRepository: Repository<Room>,
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
    private roomGateway: RoomGateway

){}
    
    findRooms(){
        return this.roomRepository.find();

    }

    createRooms(createRoomDetails :CreateRoomParam){
        const newRoom = this.roomRepository.create({...createRoomDetails});
        return this.roomRepository.save(newRoom);
    }

    updateRooms(id: number, updateRoomDetails : UpdateRoomParam){
        return this.roomRepository.update({id},{...updateRoomDetails});
    }

    

    async createBooking(createBookingDto: BookingDto) {
        const { userId, roomId, date, startTime, duration } = createBookingDto;
      
        // Calculate end time
        const endTime = this.calculateEndTime(startTime, duration);
      
        // Check for conflicts
        const conflicts = await this.bookingRepository.createQueryBuilder('booking')
          .where('booking.roomId = :roomId', { roomId })
          .andWhere('booking.date = :date', { date })
          .andWhere('(booking.startTime < :endTime AND booking.endTime > :startTime)', { startTime, endTime })
          .setParameters({ startTime, endTime })
          .getMany();
      
        if (conflicts.length > 0) {
          throw new Error('Booking conflict detected');
        }
      
        // Include endTime in createBookingDto
        const newBookingDto = { ...createBookingDto, endTime };
      
        // Create and save the new booking
        const newBooking = this.bookingRepository.create(newBookingDto);
        const savedBooking = await this.bookingRepository.save(newBooking);
      
        // Notify clients about the new booking
        this.roomGateway.server.emit('roomUpdate', savedBooking);
      
        return savedBooking;
      }
      
      calculateEndTime(startTime: string, duration: string): string {
        const [startHours, startMinutes] = startTime.split(':').map(Number);
        const [durationHours, durationMinutes] = duration.split(':').map(Number);
      
        const endHours = startHours + durationHours + Math.floor((startMinutes + durationMinutes) / 60);
        const endMinutes = (startMinutes + durationMinutes) % 60;
      
        return `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
      }
      
      
}
