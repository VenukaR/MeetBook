import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/profile';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, CreateUserProfileParams, updateUserParams } from 'src/users/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository :Repository<User>,
        @InjectRepository(Profile) private profileRepository :Repository<Profile> //creating a repo tothe profiles

    ){}


    findUsers(){
        return this.userRepository.find({relations:['profile']});
    }

    createUsers(userDetails: CreateUserParams){
        const newUser = this.userRepository.create({
            ...userDetails,createdAt :new Date(),
        })
        return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserDetails: updateUserParams){
        return this.userRepository.update({id},{...updateUserDetails}); //only use given ones updates
    }

    deleteUser(id:number){
        this.userRepository.delete({id})
    }


    async createuserProfile(id:number,createUserProfile : CreateUserProfileParams){
        const user = await this.userRepository.findOneBy({id});
        if(!user)
            throw new HttpException(
        "User Not Found Cannot Create a Profile",
        HttpStatus.BAD_REQUEST);
        
        const newProfile = this.profileRepository.create(createUserProfile);
        const savedProfile = await this.profileRepository.save(newProfile);
        user.profile = savedProfile;
        return this.userRepository.save(user);
    }
}
