import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUser } from './usersDTO/createUserDTO';
import { Users } from './usersDTO/usersDTO';
import { UsersService } from './users.service';
import { userProviders } from './user.provider';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    async getUsers(): Promise<Users[]> {
        return await this.userService.getAllUsers();
    }


    @Post()
    async createUser(@Body() createUser: CreateUser): Promise<CreateUser> {
        return await this.userService.createUser(createUser);
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Users> {
        return await this.userService.getUser(id) 
    }

    @Put(':id')
    async update(@Body() updateUser: any,  @Param('id') id: string) {
        return await this.userService.editUser(id, updateUser);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.userService.remove(id);
    }
}
