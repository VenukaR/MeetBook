import { BookingDto } from 'src/rooms/dtos/booking.dto';
import { CreateRoomDto } from 'src/rooms/dtos/createRoom.dto';
import { UpdateRoomDto } from 'src/rooms/dtos/updateRoom.dto';
import { RoomsService } from 'src/rooms/service/rooms/rooms.service';
export declare class RoomsController {
    private roomService;
    constructor(roomService: RoomsService);
    getRooms(): Promise<import("../../../typeorm/entities/Room").Room[]>;
    createRooms(createRoomDto: CreateRoomDto): Promise<import("../../../typeorm/entities/Room").Room>;
    updateRoomById(roomnumber: number, updateRoomDto: UpdateRoomDto): Promise<void>;
    createBooking(createBookingDto: BookingDto): Promise<import("../../../typeorm/entities/Booking").Booking>;
}
