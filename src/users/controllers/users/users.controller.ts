import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserProfileDto } from 'src/users/dto/createUserProfile.dto';
import { createUsersdto } from 'src/users/dto/createUsers.dto';
import { UpdateUserDto } from 'src/users/dto/updateUseres.dto';
import { UsersService } from 'src/users/service/users/users.service';

@Controller('users')
export class UsersController {

    constructor( private userService: UsersService){}

    @Get()
    async getUsers(){
        const users =await this.userService.findUsers();
        return users;
    }


    @Post()
    createUsers(@Body() createUsersdto:createUsersdto){
        return this.userService.createUsers(createUsersdto);
    }
    
    @Patch(':id') //can use put or patch
        async updateUserById(
            @Param('id',ParseIntPipe)id:number, 
            @Body() updateUserDto: UpdateUserDto){
            await this.userService.updateUser(id,updateUserDto)
        }
    @Delete(':id')
    async deleteUserById(
        @Param('id',ParseIntPipe) id:number){
            await this.userService.deleteUser(id)

        }
     
    @Post(':id/profiles') //5/profiles
    createUserProfile(@Param('id',ParseIntPipe) id:number,
        @Body() createUsrProfileDto: CreateUserProfileDto){
        return this.userService.createuserProfile(id,createUsrProfileDto)
    }
}