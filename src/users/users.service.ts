import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUser } from './usersDTO/createUserDTO';

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
}
