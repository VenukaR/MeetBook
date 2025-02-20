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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const profile_1 = require("../../../typeorm/entities/profile");
const User_1 = require("../../../typeorm/entities/User");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(userRepository, profileRepository) {
        this.userRepository = userRepository;
        this.profileRepository = profileRepository;
    }
    findUsers() {
        return this.userRepository.find({ relations: ['profile'] });
    }
    createUsers(userDetails) {
        const newUser = this.userRepository.create({
            ...userDetails, createdAt: new Date(),
        });
        return this.userRepository.save(newUser);
    }
    updateUser(id, updateUserDetails) {
        return this.userRepository.update({ id }, { ...updateUserDetails });
    }
    deleteUser(id) {
        this.userRepository.delete({ id });
    }
    async createuserProfile(id, createUserProfile) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user)
            throw new common_1.HttpException("User Not Found Cannot Create a Profile", common_1.HttpStatus.BAD_REQUEST);
        const newProfile = this.profileRepository.create(createUserProfile);
        const savedProfile = await this.profileRepository.save(newProfile);
        user.profile = savedProfile;
        return this.userRepository.save(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(User_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(profile_1.Profile)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map