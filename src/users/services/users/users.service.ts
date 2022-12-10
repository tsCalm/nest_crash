import { Injectable } from '@nestjs/common';
import { createUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'limsm',
      email: 'dlatkdals93@gmail.com',
    },
    {
      username: 'limsm1',
      email: 'dlatkdals931@gmail.com',
    },
    {
      username: 'limsm2',
      email: 'dlatkdals932@gmail.com',
    },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: createUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserByUd(id: number) {
    return {
      id,
      username: 'testUser',
      email: 'test@email.com',
    };
  }
}
