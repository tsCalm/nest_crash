import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      name: 'limsm',
      email: 'dlatkdals93@gmail.com',
    },

    {
      name: 'limsm12',
      email: 'dlatkdals923@gmail.com',
    },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
}
