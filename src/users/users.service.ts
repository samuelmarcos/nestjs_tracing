import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUser } from './usersDTO/createUserDTO';
import { UpdateUser } from './usersDTO/updateUserDTO';

@Injectable()
export class UsersService {
    constructor(@Inject('USER_REPOSITORY') private userRepository: Repository<User>) {}

    async createUser(createUser: CreateUser): Promise<User> {
        const { name, email, password }  = createUser;

        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;

        await this.userRepository.save(user);
        return user;
    }

    async getAllUsers(): Promise<CreateUser[]> {
        return await this.userRepository.find({});
    }

    async getUser(id: string): Promise<CreateUser> {
        return await this.userRepository.findOne({ where: {id}});
    }

    async editUser(id: string, updateUser: UpdateUser): Promise<any> {
         const user = await this.userRepository.update(id, {...updateUser.body});

        return user;
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete({id})
    }
}
