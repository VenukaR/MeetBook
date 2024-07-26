import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BookingDto } from 'src/rooms/dtos/booking.dto';
import { CreateRoomDto } from 'src/rooms/dtos/createRoom.dto';
import { UpdateRoomDto } from 'src/rooms/dtos/updateRoom.dto';
import { RoomsService } from 'src/rooms/service/rooms/rooms.service';
import { UpdateUserDto } from 'src/users/dto/updateUseres.dto';

@Controller('rooms')
export class RoomsController {

constructor(private roomService :RoomsService){}
@Get()
async getRooms(){
    const rooms =await this.roomService.findRooms();
        return rooms;

}

@Post()
createRooms(@Body() createRoomDto: CreateRoomDto){
    return this.roomService.createRooms(createRoomDto)
}


@Patch(':roomnumber')
async updateRoomById(
    @Param('roomnumber',ParseIntPipe) roomnumber:number,
    @Body() updateRoomDto : UpdateRoomDto
){
    await this.roomService.updateRooms(roomnumber,updateRoomDto)
}

@Post('book')
    createBooking(@Body() createBookingDto: BookingDto) {
        return this.roomService.createBooking(createBookingDto);
    }
    


}