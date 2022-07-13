import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAll(): string {
    return this.userService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): string {
    return 'get user by id ' + id;
  }
}
