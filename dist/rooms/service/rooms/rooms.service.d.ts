import { BookingDto } from 'src/rooms/dtos/booking.dto';
import { RoomGateway } from 'src/rooms/room.gateway';
import { CreateRoomParam, UpdateRoomParam } from 'src/rooms/utils/types';
import { Booking } from 'src/typeorm/entities/Booking';
import { Room } from 'src/typeorm/entities/Room';
import { Repository } from 'typeorm';
export declare class RoomsService {
    private roomRepository;
    private bookingRepository;
    private roomGateway;
    constructor(roomRepository: Repository<Room>, bookingRepository: Repository<Booking>, roomGateway: RoomGateway);
    findRooms(): Promise<Room[]>;
    createRooms(createRoomDetails: CreateRoomParam): Promise<Room>;
    updateRooms(id: number, updateRoomDetails: UpdateRoomParam): Promise<import("typeorm").UpdateResult>;
    createBooking(createBookingDto: BookingDto): Promise<Booking>;
    calculateEndTime(startTime: string, duration: string): string;
}
