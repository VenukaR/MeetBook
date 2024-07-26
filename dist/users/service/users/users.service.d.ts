import { Profile } from 'src/typeorm/entities/profile';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, CreateUserProfileParams, updateUserParams } from 'src/users/utils/types';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepository;
    private profileRepository;
    constructor(userRepository: Repository<User>, profileRepository: Repository<Profile>);
    findUsers(): Promise<User[]>;
    createUsers(userDetails: CreateUserParams): Promise<User>;
    updateUser(id: number, updateUserDetails: updateUserParams): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: number): void;
    createuserProfile(id: number, createUserProfile: CreateUserProfileParams): Promise<User>;
}
