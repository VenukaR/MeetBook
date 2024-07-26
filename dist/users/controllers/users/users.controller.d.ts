import { CreateUserProfileDto } from 'src/users/dto/createUserProfile.dto';
import { createUsersdto } from 'src/users/dto/createUsers.dto';
import { UpdateUserDto } from 'src/users/dto/updateUseres.dto';
import { UsersService } from 'src/users/service/users/users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): Promise<import("../../../typeorm/entities/User").User[]>;
    createUsers(createUsersdto: createUsersdto): Promise<import("../../../typeorm/entities/User").User>;
    updateUserById(id: number, updateUserDto: UpdateUserDto): Promise<void>;
    deleteUserById(id: number): Promise<void>;
    createUserProfile(id: number, createUsrProfileDto: CreateUserProfileDto): Promise<import("../../../typeorm/entities/User").User>;
}
