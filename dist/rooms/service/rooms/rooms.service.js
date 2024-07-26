"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const room_gateway_1 = require("../../room.gateway");
const Booking_1 = require("../../../typeorm/entities/Booking");
const Room_1 = require("../../../typeorm/entities/Room");
const typeorm_2 = require("typeorm");
let RoomsService = class RoomsService {
    constructor(roomRepository, bookingRepository, roomGateway) {
        this.roomRepository = roomRepository;
        this.bookingRepository = bookingRepository;
        this.roomGateway = roomGateway;
    }
    findRooms() {
        return this.roomRepository.find();
    }
    createRooms(createRoomDetails) {
        const newRoom = this.roomRepository.create({ ...createRoomDetails });
        return this.roomRepository.save(newRoom);
    }
    updateRooms(id, updateRoomDetails) {
        return this.roomRepository.update({ id }, { ...updateRoomDetails });
    }
    async createBooking(createBookingDto) {
        const { userId, roomId, date, startTime, duration } = createBookingDto;
        const endTime = this.calculateEndTime(startTime, duration);
        const conflicts = await this.bookingRepository.createQueryBuilder('booking')
            .where('booking.roomId = :roomId', { roomId })
            .andWhere('booking.date = :date', { date })
            .andWhere('(booking.startTime < :endTime AND booking.endTime > :startTime)', { startTime, endTime })
            .setParameters({ startTime, endTime })
            .getMany();
        if (conflicts.length > 0) {
            throw new Error('Booking conflict detected');
        }
        const newBookingDto = { ...createBookingDto, endTime };
        const newBooking = this.bookingRepository.create(newBookingDto);
        const savedBooking = await this.bookingRepository.save(newBooking);
        this.roomGateway.server.emit('roomUpdate', savedBooking);
        return savedBooking;
    }
    calculateEndTime(startTime, duration) {
        const [startHours, startMinutes] = startTime.split(':').map(Number);
        const [durationHours, durationMinutes] = duration.split(':').map(Number);
        const endHours = startHours + durationHours + Math.floor((startMinutes + durationMinutes) / 60);
        const endMinutes = (startMinutes + durationMinutes) % 60;
        return `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
    }
};
exports.RoomsService = RoomsService;
exports.RoomsService = RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Room_1.Room)),
    __param(1, (0, typeorm_1.InjectRepository)(Booking_1.Booking)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        room_gateway_1.RoomGateway])
], RoomsService);
//# sourceMappingURL=rooms.service.js.map