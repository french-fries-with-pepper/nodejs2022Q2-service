import { Injectable } from '@nestjs/common';
import User from '../types/User';

import db from 'src/db/db';
@Injectable()
export class UserService {
  getAll(): User[] {
    return db.getAllUsers();
  }

  getUserById(id: string): User | undefined {
    const user = db.getUserById(id);
    if (!user) return undefined;
    delete user.password;
    return user;
  }

  createUser(user: User) {
    return db.addUser(user);
  }
}
