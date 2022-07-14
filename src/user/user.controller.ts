import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { v4 } from 'uuid';
import { isValidUUIDV4 } from 'is-valid-uuid-v4';
import { UserService } from './user.service';
import CreateUserDto from './dto/CreateUserDto';

import User from 'src/types/User';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAll(): User[] {
    return this.userService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): User {
    if (!isValidUUIDV4(id)) {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
    }
    const result = this.userService.getUserById(id);
    if (!result) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return result;
  }

  @Post()
  createUser(@Body() creatUserDto: CreateUserDto): User {
    const newUser: User = {
      id: v4(),
      login: creatUserDto.login,
      password: creatUserDto.password,
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    this.userService.createUser(newUser);
    delete newUser.password;
    return newUser;
  }
}
