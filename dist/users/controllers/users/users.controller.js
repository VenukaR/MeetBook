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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const createUserProfile_dto_1 = require("../../dto/createUserProfile.dto");
const createUsers_dto_1 = require("../../dto/createUsers.dto");
const updateUseres_dto_1 = require("../../dto/updateUseres.dto");
const users_service_1 = require("../../service/users/users.service");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async getUsers() {
        const users = await this.userService.findUsers();
        return users;
    }
    createUsers(createUsersdto) {
        return this.userService.createUsers(createUsersdto);
    }
    async updateUserById(id, updateUserDto) {
        await this.userService.updateUser(id, updateUserDto);
    }
    async deleteUserById(id) {
        await this.userService.deleteUser(id);
    }
    createUserProfile(id, createUsrProfileDto) {
        return this.userService.createuserProfile(id, createUsrProfileDto);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUsers_dto_1.createUsersdto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUsers", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateUseres_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserById", null);
__decorate([
    (0, common_1.Post)(':id/profiles'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createUserProfile_dto_1.CreateUserProfileDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUserProfile", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map