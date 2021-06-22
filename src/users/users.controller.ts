import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUser } from './usersDTO/createUserDTO';
import { UpdateUser } from './usersDTO/updateUserDTO';
import { UsersService } from './users.service';
import { userProviders } from './user.provider';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    async getUsers(): Promise<CreateUser[]> {
        return await this.userService.getAllUsers();
    }


    @Post()
    async createUser(@Body() createUser: CreateUser): Promise<CreateUser> {
        return await this.userService.createUser(createUser);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.userService.getUser(id) 
    }

    @Put(':id')
    async update(@Body() updateUser: UpdateUser,  @Param('id') id: string) {
        return await this.userService.editUser(id, updateUser);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.userService.remove(id);
    }
}
