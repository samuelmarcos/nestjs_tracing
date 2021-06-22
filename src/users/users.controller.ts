import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUser } from './usersDTO/createUserDTO';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getUsers() {
        return {
            name: 'Samuel',
            email: 'samuel@email.com',
            password: '123'
        }
    }


    @Post()
    async createUser(@Body() createUser: CreateUser): Promise<CreateUser> {
        return await this.userService.createUser(createUser);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `we get the dog with the id ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `we update the dog with the id ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `we delete the dog with the id ${id}`;
    }
}
