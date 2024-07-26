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
exports.RoomsController = void 0;
const common_1 = require("@nestjs/common");
const booking_dto_1 = require("../../dtos/booking.dto");
const createRoom_dto_1 = require("../../dtos/createRoom.dto");
const updateRoom_dto_1 = require("../../dtos/updateRoom.dto");
const rooms_service_1 = require("../../service/rooms/rooms.service");
let RoomsController = class RoomsController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    async getRooms() {
        const rooms = await this.roomService.findRooms();
        return rooms;
    }
    createRooms(createRoomDto) {
        return this.roomService.createRooms(createRoomDto);
    }
    async updateRoomById(roomnumber, updateRoomDto) {
        await this.roomService.updateRooms(roomnumber, updateRoomDto);
    }
    createBooking(createBookingDto) {
        return this.roomService.createBooking(createBookingDto);
    }
};
exports.RoomsController = RoomsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "getRooms", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createRoom_dto_1.CreateRoomDto]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "createRooms", null);
__decorate([
    (0, common_1.Patch)(':roomnumber'),
    __param(0, (0, common_1.Param)('roomnumber', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateRoom_dto_1.UpdateRoomDto]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "updateRoomById", null);
__decorate([
    (0, common_1.Post)('book'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [booking_dto_1.BookingDto]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "createBooking", null);
exports.RoomsController = RoomsController = __decorate([
    (0, common_1.Controller)('rooms'),
    __metadata("design:paramtypes", [rooms_service_1.RoomsService])
], RoomsController);
//# sourceMappingURL=rooms.controller.js.map