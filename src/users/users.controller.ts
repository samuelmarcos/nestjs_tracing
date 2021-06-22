import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUser } from './usersDTO/createUserDTO';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return {
            name: 'Samuel',
            email: 'samuel@email.com',
            password: '123'
        }
    }


    @Post()
    createUser(@Body() createUser: CreateUser) {
        return createUser
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
